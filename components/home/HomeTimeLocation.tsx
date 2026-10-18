"use client";

import { useEffect, useState } from "react";

const puneTime = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export default function HomeTimeLocation() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(puneTime.format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 15_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute top-5 left-1/2 z-10 w-full max-w-[1000px] -translate-x-1/2 max-[1048px]:px-6 max-[600px]:top-[76px]">
      <p className="m-0 whitespace-nowrap text-[13px] leading-[18.571px] font-medium text-[#ededed]">
        {time ? `${time} • Pune, Maharashtra` : "Pune, Maharashtra"}
      </p>
    </div>
  );
}
