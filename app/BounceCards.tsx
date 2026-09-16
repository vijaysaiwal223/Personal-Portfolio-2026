"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type BounceCardsProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles: string[];
  enableHover?: boolean;
};

export default function BounceCards({
  className = "",
  images,
  animationDelay = 0.35,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.65)",
  transformStyles,
  enableHover = true,
  ...props
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bounce-card",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);

    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    }

    return transformStr === "none" ? "rotate(0deg)" : `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = Number.parseFloat(match[1]);
      return baseTransform.replace(translateRegex, `translate(${currentX + offsetX}px)`);
    }

    return baseTransform === "none" ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, index) => {
      const target = q(`.bounce-card-${index}`);
      const baseTransform = transformStyles[index] ?? "none";

      gsap.killTweensOf(target);

      if (index === hoveredIdx) {
        gsap.to(target, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
        return;
      }

      const offsetX = index < hoveredIdx ? -44 : 44;

      gsap.to(target, {
        transform: getPushedTransform(baseTransform, offsetX),
        duration: 0.4,
        ease: "back.out(1.4)",
        delay: Math.abs(hoveredIdx - index) * 0.04,
        overwrite: "auto",
      });
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, index) => {
      const target = q(`.bounce-card-${index}`);

      gsap.killTweensOf(target);
      gsap.to(target, {
        transform: transformStyles[index] ?? "none",
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const cardPositions = [
    "left-[99.65px] top-[174.69px] z-[1] max-[760px]:left-[25.421%] max-[760px]:top-[43.455%]",
    "left-[178.65px] top-[62.69px] z-[3] max-[760px]:left-[45.574%] max-[760px]:top-[15.594%]",
    "left-[26.33px] top-[25.87px] z-[2] max-[760px]:left-[6.717%] max-[760px]:top-[6.435%]",
  ];

  return (
    <div
      className={`relative h-[402px] w-[392px] max-[760px]:aspect-[392/402] max-[760px]:h-auto max-[760px]:w-full max-[560px]:w-[min(392px,100%)] max-[560px]:justify-self-center ${className}`}
      ref={containerRef}
      {...props}
    >
      {images.map((image, index) => (
        <div
          className={`bounce-card bounce-card-${index} absolute h-[207px] w-[180px] origin-center overflow-hidden rounded drop-shadow-[0_14px_20px_rgb(24_24_27_/_10%)] will-change-transform hover:z-[5] max-[760px]:h-[51.493%] max-[760px]:w-[45.918%] ${cardPositions[index] ?? ""} ${image.className ?? ""}`}
          key={image.src}
          onMouseEnter={() => pushSiblings(index)}
          onMouseLeave={resetSiblings}
          style={{ transform: transformStyles[index] ?? "none" }}
        >
          <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
