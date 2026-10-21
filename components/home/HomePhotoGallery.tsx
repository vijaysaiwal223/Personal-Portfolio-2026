"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HomeAbout.module.css";

const assetRoot = "/assets/figma-home/about";
const photos = [
  { file: "gallery-motorcycle.png", alt: "Motorcycle parked by a lake" },
  { file: "gallery-portrait.png", alt: "Vijay sitting indoors" },
  { file: "gallery-stadium.png", alt: "View of a cricket stadium" },
  { file: "gallery-gym.png", alt: "Workout at a gym" },
  { file: "gallery-desk.png", alt: "Laptop on a desk" },
  { file: "gallery-mountains.png", alt: "Looking over a mountain valley" },
  { file: "gallery-flight.png", alt: "City view from an airplane" },
];

const angles = [-9, -6, -4, 0, 4, 6, 9];
const stagger = 0.06;
const hoverScale = 1.06;

type CardBody = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  vx: number;
  vy: number;
  vr: number;
  vs: number;
};

function spring(value: number, velocity: number, target: number, stiffness: number, damping: number, dt: number): [number, number] {
  const nextVelocity = velocity + ((target - value) * stiffness - velocity * damping) * dt;
  return [value + nextVelocity * dt, nextVelocity];
}

export default function HomePhotoGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const hoveredRef = useRef(-1);
  const wakeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const cards = cardRefs.current.filter((card): card is HTMLLIElement => card !== null);
    if (!gallery || cards.length !== photos.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stackOffsets = Array<number>(cards.length).fill(0);
    const bodies: CardBody[] = cards.map(() => ({
      x: 0, y: 0, rotate: 0, scale: 0.92,
      vx: 0, vy: 0, vr: 0, vs: 0,
    }));
    let expanded = false;
    let expandedAt = 0;
    let animationFrame = 0;
    let timer: number | undefined;
    let lastFrame = performance.now();

    const renderCard = (card: HTMLLIElement, body: CardBody) => {
      card.style.transform = `translate3d(${body.x.toFixed(2)}px, ${body.y.toFixed(2)}px, 0) rotate(${body.rotate.toFixed(3)}deg) scale(${body.scale.toFixed(4)})`;
    };

    const updateLayers = () => {
      cards.forEach((card, index) => {
        const active = hoveredRef.current === index;
        card.style.zIndex = String(active ? cards.length + 1 : index + 1);
        card.toggleAttribute("data-active", active);
      });
    };

    const measureStack = () => {
      const stackIndex = window.matchMedia("(max-width: 900px)").matches ? 1 : 3;
      const stackLeft = cards[stackIndex].offsetLeft;
      cards.forEach((card, index) => {
        stackOffsets[index] = stackLeft - card.offsetLeft;
        if (!expanded) {
          bodies[index].x = stackOffsets[index];
          renderCard(card, bodies[index]);
        }
      });
    };

    const frame = (now: number) => {
      animationFrame = 0;
      const dt = Math.min(1 / 30, Math.max(1 / 240, (now - lastFrame) / 1000));
      lastFrame = now;
      const elapsed = (now - expandedAt) / 1000;
      const hovered = hoveredRef.current;
      const pushDistance = window.matchMedia("(max-width: 900px)").matches ? 20 : 34;
      const substeps = Math.ceil(dt / (1 / 240));
      const stepTime = dt / substeps;
      let moving = 0;

      cards.forEach((card, index) => {
        const body = bodies[index];
        const appeared = elapsed >= index * stagger;
        let targetX = appeared ? 0 : stackOffsets[index];
        let targetY = 0;
        let targetRotate = appeared ? angles[index] : 0;
        let targetScale = appeared ? 1 : 0.92;

        if (hovered >= 0 && appeared) {
          if (hovered === index) {
            targetY = -8;
            targetRotate = 0;
            targetScale = hoverScale;
          } else {
            targetX += Math.sign(index - hovered) * pushDistance;
          }
        }

        for (let stepIndex = 0; stepIndex < substeps; stepIndex++) {
          [body.x, body.vx] = spring(body.x, body.vx, targetX, 210, 21, stepTime);
          [body.y, body.vy] = spring(body.y, body.vy, targetY, 210, 21, stepTime);
          [body.rotate, body.vr] = spring(body.rotate, body.vr, targetRotate, 210, 21, stepTime);
          [body.scale, body.vs] = spring(body.scale, body.vs, targetScale, 170, 13, stepTime);
        }

        moving += Math.abs(body.vx) + Math.abs(body.vy) + Math.abs(body.vr) +
          Math.abs(body.vs) * 100 + Math.abs(targetX - body.x) +
          Math.abs(targetY - body.y) + Math.abs(targetRotate - body.rotate) +
          Math.abs(targetScale - body.scale) * 100;
        renderCard(card, body);
      });

      updateLayers();
      if (moving > 0.02 || elapsed < (cards.length - 1) * stagger) {
        animationFrame = requestAnimationFrame(frame);
      }
    };

    const wake = () => {
      if (reducedMotion) {
        updateLayers();
        return;
      }
      if (animationFrame || !expanded) return;
      lastFrame = performance.now();
      animationFrame = requestAnimationFrame(frame);
    };
    wakeRef.current = wake;
    measureStack();
    updateLayers();

    let observer: IntersectionObserver | undefined;
    if (reducedMotion) {
      expanded = true;
      gallery.dataset.expanded = "true";
      cards.forEach((card, index) => {
        bodies[index] = { ...bodies[index], x: 0, rotate: angles[index], scale: 1 };
        renderCard(card, bodies[index]);
      });
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        timer = window.setTimeout(() => {
          expanded = true;
          expandedAt = performance.now();
          gallery.dataset.expanded = "true";
          wake();
        }, 550);
      }, { threshold: 0.35 });
      observer.observe(gallery);
    }

    window.addEventListener("resize", measureStack);
    return () => {
      observer?.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", measureStack);
      wakeRef.current = null;
    };
  }, []);

  return (
    <div className={styles.galleryViewport} data-expanded="false" ref={galleryRef} role="group" aria-label="Photo gallery">
      <ul className={styles.galleryTrack}>
        {photos.map((photo, index) => (
          <li
            className={styles.photoCard}
            key={photo.file}
            ref={(card) => { cardRefs.current[index] = card; }}
            onPointerEnter={(event) => {
              if (event.pointerType === "touch") return;
              hoveredRef.current = index;
              wakeRef.current?.();
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "touch" || hoveredRef.current !== index) return;
              hoveredRef.current = -1;
              wakeRef.current?.();
            }}
          >
            <div className={styles.photoImage}>
              <Image src={`${assetRoot}/${photo.file}`} alt={photo.alt} fill sizes="(max-width: 900px) 138px, 170px" loading="eager" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
