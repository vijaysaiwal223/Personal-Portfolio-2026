"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const assetRoot = "/assets/figma-home/websites/tools";

export default function WebsiteToolDock() {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    const icons = Array.from(dock.querySelectorAll<HTMLElement>(".website-tool-icon"));
    const centers = icons.map((icon) => icon.offsetLeft + icon.offsetWidth / 2);
    const scales = icons.map(() => 1);
    const velocities = icons.map(() => 0);
    let pointerX: number | null = null;
    let frame = 0;
    let previousTime = 0;

    function animate(time: number) {
      frame = 0;
      const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
      previousTime = time;
      const spring = 24;
      const decay = Math.exp(-spring * elapsed);
      const targets = centers.map((center) => pointerX === null ? 1 : 1 + 0.55 * Math.exp(-0.5 * ((pointerX - center) / 35) ** 2));

      scales.forEach((scale, index) => {
        const distance = scale - targets[index];
        scales[index] = targets[index] + (distance * (1 + spring * elapsed) + velocities[index] * elapsed) * decay;
        velocities[index] = (velocities[index] * (1 - spring * elapsed) - distance * spring * spring * elapsed) * decay;
      });

      const extraWidths = scales.map((scale) => 32 * (scale - 1));
      const totalExtra = extraWidths.reduce((total, width) => total + width, 0);
      let precedingExtra = 0;

      icons.forEach((icon, index) => {
        const scale = scales[index];
        const offsetX = -totalExtra / 2 + precedingExtra + extraWidths[index] / 2;
        icon.style.transform = `translate3d(${offsetX}px, ${-10 * (scale - 1)}px, 0) scale(${scale})`;
        icon.style.zIndex = String(Math.round(scale * 100));
        precedingExtra += extraWidths[index];
      });

      if (scales.some((scale, index) => Math.abs(scale - targets[index]) > 0.001 || Math.abs(velocities[index]) > 0.005)) {
        frame = requestAnimationFrame(animate);
      } else {
        previousTime = 0;
        if (pointerX === null) icons.forEach((icon) => { icon.style.transform = ""; icon.style.zIndex = ""; });
      }
    }

    function startAnimation() {
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX - dock!.getBoundingClientRect().left;
      startAnimation();
    }

    function handlePointerLeave() {
      pointerX = null;
      startAnimation();
    }

    dock.addEventListener("pointermove", handlePointerMove);
    dock.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      dock.removeEventListener("pointermove", handlePointerMove);
      dock.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(frame);
      icons.forEach((icon) => { icon.style.transform = ""; icon.style.zIndex = ""; });
    };
  }, []);

  return (
    <div className="website-tool-dock relative flex w-fit items-center gap-[6px] rounded-2xl border border-white/10 bg-[#19191b] p-2" role="img" aria-label="Tools I build with: Webflow, Shopify, Next.js, and Framer" ref={dockRef}>
      <div className="website-tool-icon relative size-8 shrink-0 overflow-hidden rounded-lg border-[0.5px] border-black/10 bg-[linear-gradient(45deg,#af5aa4_0%,#6820ae_34.788%,#140522_67.586%,#010101_100%)]">
        <Image src={`${assetRoot}/webflow.png`} alt="" width={32} height={32} className="absolute left-1/2 top-1/2 size-8 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
      </div>
      <div className="website-tool-icon flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-black/10 bg-white">
        <Image src={`${assetRoot}/shopify.png`} alt="" width={21} height={24} className="h-6 w-[21px] object-cover" />
      </div>
      <div className="website-tool-icon flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-black/10 bg-black">
        <Image src={`${assetRoot}/nextjs.svg`} alt="" width={32} height={32} className="size-8 max-w-none shrink-0" unoptimized />
      </div>
      <div className="website-tool-icon size-8 shrink-0 overflow-hidden rounded-lg">
        <Image src={`${assetRoot}/framer.png`} alt="" width={32} height={32} className="size-8 object-cover" />
      </div>
    </div>
  );
}
