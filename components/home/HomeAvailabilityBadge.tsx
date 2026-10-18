import Image from "next/image";

export default function HomeAvailabilityBadge() {
  return (
    <div className="pointer-events-none absolute top-[14px] left-1/2 z-10 flex w-full max-w-[1000px] -translate-x-1/2 justify-end max-[1048px]:pr-6 max-[600px]:top-[72px]">
      <div className="relative flex h-7 items-center justify-center gap-[5px] overflow-hidden rounded-full bg-[rgba(0,215,148,0.14)] px-[10.5px] text-xs leading-4 whitespace-nowrap text-[#00d794]">
        <span className="home-availability-pulse relative block size-2 shrink-0" aria-hidden="true">
          <Image className="relative z-10 block" src="/assets/figma-home/status/pulse.svg" alt="" width={8} height={8} unoptimized />
        </span>
        <span>Available for work</span>
      </div>
    </div>
  );
}
