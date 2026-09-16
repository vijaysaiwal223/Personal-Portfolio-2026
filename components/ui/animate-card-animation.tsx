"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ContentType = 1 | 2 | 3 | 4;

type Card = {
  id: number;
  contentType: ContentType;
};

type ProjectContent = {
  title: string;
  description: string;
  image: string;
};

const projectContent: Record<ContentType, ProjectContent> = {
  1: {
    title: "Social Listening",
    description: "A dashboard concept for surfacing conversations, sentiment, and social signals.",
    image: "/project%20thumbails/Social%20Listening.png",
  },
  2: {
    title: "Whoflex",
    description: "A fitness product experience shaped around discovery, trust, and onboarding.",
    image: "/project%20thumbails/Whoflex.png",
  },
  3: {
    title: "The Social Stays",
    description: "A hospitality concept for browsing curated stays and social-first travel moments.",
    image: "/project%20thumbails/The%20Social%20Stays.png",
  },
  4: {
    title: "Matchscope",
    description: "A matching product concept for comparing signals, fit, and decision confidence.",
    image: "/project%20thumbails/Matchscope.png",
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
];

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
};

const enterAnimation = {
  y: -16,
  scale: 0.9,
};

function CardContent({ contentType }: { contentType: ContentType }) {
  const data = projectContent[contentType];

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex aspect-[5/2] w-full items-center justify-center overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-black/10">
        <img className="h-full w-full select-none object-cover" src={data.image} alt={data.title} draggable={false} />
      </div>
      <div className="flex w-full items-center justify-between gap-3 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-[Youth,sans-serif] text-base leading-6 font-medium tracking-[-0.32px] text-[#18181b]">{data.title}</span>
          <span className="font-[var(--font-circular)] text-sm leading-5 tracking-[-0.16px] text-[#71717a]">{data.description}</span>
        </div>
        <button className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-[#18181b] py-0 pr-3 pl-4 font-[var(--font-circular)] text-sm font-medium text-white transition-colors hover:bg-black" type="button">
          Read
          <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;
  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      animate={{ y, scale }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-[#e4e4e7] bg-white p-1 shadow-lg will-change-transform sm:w-[512px]"
      exit={exitAnim}
      initial={initialAnim}
      key={card.id}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  );
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleAnimate = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    const nextContentType = ((cards[2].contentType % 4) + 1) as ContentType;
    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }]);
    setNextId((prev) => prev + 1);
    window.setTimeout(() => setIsAnimating(false), 450);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-[#e4e4e7] bg-[#fafafa] pt-2 shadow-[0_1px_2px_rgb(24_24_27_/_4%)]">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard card={card} index={index} isAnimating={isAnimating} key={card.id} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-[#e4e4e7] bg-white py-4">
        <button
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-[#e4e4e7] bg-white px-3 font-[var(--font-circular)] text-sm font-medium text-[#27272a] transition-all hover:bg-[#f4f4f5] active:scale-[0.98]"
          onClick={handleAnimate}
          type="button"
        >
          Animate
        </button>
      </div>
    </div>
  );
}
