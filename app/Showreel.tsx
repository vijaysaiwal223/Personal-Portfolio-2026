"use client";

import { useEffect, useRef, useState } from "react";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (motionPreference.matches) videoRef.current?.pause();
      else void videoRef.current?.play().catch(() => {});
    };
    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);
    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <figure className="group m-0 flex w-full scroll-mt-6 flex-col items-center gap-3" id="recent-work">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#e4e4e7] bg-[#f2f4f5]">
        <video
          className="block h-full w-full object-cover"
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="A showreel of Vijay Saiwal's recent design work"
          onPlay={() => { setPlaying(true); setStarted(true); }}
          onPause={() => setPlaying(false)}
        >
          <source src="/assets/d6301f6c04f42adfa6530c2058783b3e25e0979c.mp4" type="video/mp4" />
        </video>
        {!started && (
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: "url('/assets/portfolio/design-reference.png')", backgroundPosition: "50% 36.3248%", backgroundSize: "160% 516%" }}
            aria-hidden="true"
          />
        )}
        <button className="absolute right-3 bottom-3 min-h-9 cursor-pointer rounded-full border border-white/30 bg-[#18181bd9] px-3.5 py-1.5 font-[inherit] text-xs leading-5 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 focus:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2b4eff] motion-reduce:opacity-100 motion-reduce:transition-none" type="button" onClick={togglePlayback} aria-label={playing ? "Pause showreel" : "Play showreel"}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </figure>
  );
}
