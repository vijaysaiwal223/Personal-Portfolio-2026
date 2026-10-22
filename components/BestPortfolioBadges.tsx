/* eslint-disable @next/next/no-img-element */

const assetRoot = "/assets/figma-footer";

function BestPortfolioMark({ variant }: { variant: "pro" | "approved" }) {
  const isPro = variant === "pro";

  return (
    <span className="relative block size-10 shrink-0 overflow-hidden" aria-hidden="true">
      <img className="absolute left-0 top-0" src={`${assetRoot}/bestportfolio-frame.svg`} alt="" />
      <img
        className="absolute left-[2.5px] top-[2.5px]"
        src={`${assetRoot}/bestportfolio-top-${isPro ? "left" : "right"}.svg`}
        alt=""
      />
      {isPro && <img className="absolute left-[12.775px] top-[1.11px] size-[13.889px]" src={`${assetRoot}/bestportfolio-pro.png`} alt="" />}
      <img className="absolute left-[2.29px] top-[2.29px]" src={`${assetRoot}/bestportfolio-outline.svg`} alt="" />
      <img
        className={`absolute ${isPro ? "left-[15px] top-[21.46px]" : "left-[13.23px] top-[21.35px]"}`}
        src={`${assetRoot}/bestportfolio-bottom-${isPro ? "left" : "right"}.svg`}
        alt=""
      />
      {!isPro && <img className="absolute left-[12.775px] top-[1.11px] size-[13.889px]" src={`${assetRoot}/bestportfolio-pro.png`} alt="" />}
    </span>
  );
}

export default function BestPortfolioBadges() {
  return (
    <a
      className="flex shrink-0 items-center gap-2 rounded-sm transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      href="https://bestportfolio.in/portfolio/vijay-saiwal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Vijay Saiwal on BestPortfolio"
    >
      <BestPortfolioMark variant="pro" />
      <BestPortfolioMark variant="approved" />
    </a>
  );
}
