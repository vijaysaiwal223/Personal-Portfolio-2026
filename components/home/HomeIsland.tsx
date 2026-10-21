"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { links } from "@/lib/site";

const assetRoot = "/assets/figma-home";

export default function HomeIsland() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openBooking() {
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function closeBooking() {
    dialogRef.current?.close();
  }

  return (
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
      <div className="flex w-[328px] max-w-[calc(100vw-16px)] items-start">
        <Image
          className="block shrink-0 scale-x-[-1]"
          src={`${assetRoot}/island-left.svg`}
          alt=""
          width={14}
          height={14}
          unoptimized
        />
        <div className="min-w-0 flex-1 rounded-b-2xl bg-[#f1f1f1] backdrop-blur-[2px]">
          <header className="flex items-center justify-between gap-2 p-2" aria-label="Vijay Saiwal">
            <Link className="flex min-w-0 items-center gap-3 rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="/" aria-label="Vijay Saiwal, home">
              <Image className="block shrink-0" src={`${assetRoot}/logo.svg`} alt="" width={41} height={41} unoptimized />
              <span className="flex min-w-0 flex-col justify-center whitespace-nowrap">
                <span className="text-[16px] leading-5 font-medium tracking-[-0.16px] text-black">Vijay Saiwal</span>
                <span className="text-[14px] leading-5 font-normal tracking-[-0.28px] text-[#737373]">Product Designer</span>
              </span>
            </Link>
            <button
              className="flex h-8 shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border-0 bg-[#312f2e] px-3 text-[14px] leading-5 tracking-[-0.28px] text-white transition-colors hover:bg-[#1f1f1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              type="button"
              onClick={openBooking}
            >
              Book a call
            </button>
          </header>
        </div>
        <Image className="block shrink-0" src={`${assetRoot}/island-right.svg`} alt="" width={14} height={14} unoptimized />
      </div>
      <dialog
        ref={dialogRef}
        aria-label="Book a call with Vijay Saiwal"
        className="m-auto h-[min(740px,calc(100dvh-32px))] w-[min(1000px,calc(100vw-32px))] max-h-none max-w-none overflow-hidden rounded-2xl border border-[#dedede] bg-white p-0 shadow-2xl backdrop:bg-black/70"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeBooking();
        }}
      >
        <div className="flex h-12 items-center justify-between border-b border-[#e8e8e8] px-4">
          <span className="text-sm font-medium text-[#312f2e]">Book a call</span>
          <button
            type="button"
            aria-label="Close booking"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 bg-[#f1f1f1] text-xl leading-none text-[#312f2e] hover:bg-[#e5e5e5]"
            onClick={closeBooking}
          >
            ×
          </button>
        </div>
        {isOpen && (
          <iframe
            className="h-[calc(100%-48px)] w-full border-0"
            src={`${links.bookCall}?embed=true`}
            title="Schedule a call with Vijay Saiwal"
            allow="payment"
          />
        )}
      </dialog>
    </div>
  );
}
