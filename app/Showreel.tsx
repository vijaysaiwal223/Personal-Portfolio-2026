"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./showreel.module.css";

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
    <figure className={styles.showreel} id="recent-work">
      <div className={styles.player}>
        <video
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
        {!started && <div className={styles.poster} aria-hidden="true" />}
        <button className={styles.playbackButton} type="button" onClick={togglePlayback} aria-label={playing ? "Pause showreel" : "Play showreel"}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <figcaption>✨ Glimps of recent work</figcaption>
    </figure>
  );
}
