import Image from "next/image";
import { links } from "@/lib/site";
import HomeBrandLogos from "./HomeBrandLogos";
import ActionLink from "@/components/ActionLink";

type Card = [image: number, x: number, y: number];

// The three rows share the same 476.16px canvas height as the Figma collage.
const rows: Card[][] = [
  [
    [1, 30.18, -29.92], [2, 626.11, -34.67], [3, 1194.8, -39.21], [4, 1738.06, -43.54],
    [5, 346.38, 133.41], [6, 943.15, 124.71], [7, 1512.26, 116.41],
    [8, 44.16, 315.03], [9, 671.78, 301.49], [1, 1269.19, 288.62], [2, 1838.53, 276.35],
    [10, 335.13, 6.67], [11, 920.66, 1.08], [12, 1479.57, -4.24],
    [13, 38.67, 179.56], [14, 653.86, 169.57], [15, 1240.02, 160.07], [16, 1799.16, 151.01],
    [17, 365.74, 351.54], [18, 981.8, 337.19], [10, 1568.39, 323.54],
  ],
  [
    [1, -42.54, -46.76], [2, 602.21, -65.42], [3, 1215.1, -83.15], [4, 1798.43, -100.02],
    [5, 301.28, 138.97], [6, 946.98, 115.24], [7, 1560.29, 92.71],
    [8, -26.01, 361.29], [9, 655.99, 330.57], [1, 1302.37, 301.47], [2, 1915.84, 273.86],
    [10, 288.04, -10.37], [11, 920.59, -29.84], [12, 1522.07, -48.33],
    [13, -32.52, 200.58], [14, 634.83, 174.75], [15, 1268.06, 150.26], [16, 1869.72, 127],
    [17, 324.19, 397.18], [18, 992.52, 365.7], [10, 1626.16, 335.87],
  ],
  [
    [1, -127.81, -67.67], [2, 574.48, -105.49], [3, 1239, -141.26], [4, 1868.73, -175.15],
    [5, 248.93, 146.39], [6, 952.27, 101.92], [7, 1617.18, 59.9],
    [8, -107.97, 422.56], [9, 638.73, 367.87], [1, 1342.79, 316.32], [2, 2007.75, 267.65],
    [10, 233.1, -32.18], [11, 920.88, -70.72], [12, 1571.92, -107.19],
    [13, -115.81, 228.83], [14, 613.37, 181.01], [15, 1301.87, 135.88], [16, 1952.99, 93.21],
    [17, 276.45, 456.85], [18, 1006.74, 401.55], [10, 1695.59, 349.39],
  ],
];

export default function HomeHero() {
  return (
    <section className="relative w-full pb-12 max-[760px]:pb-8" aria-labelledby="home-hero-title">
      <div className="home-hero-viewport pointer-events-none absolute left-1/2 top-0 h-[620px] w-[1700px] -translate-x-1/2 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[128.94px] top-[-396.99px] flex h-[1838.03px] w-[2563.58px] items-center justify-center blur-[10px]">
          <div className="relative h-[1428.48px] w-[2164.9px] shrink-0 -rotate-[12.9deg] skew-x-[5.6deg]">
            <div className="home-hero-flow absolute left-0 top-[-65.37px] h-[2856.96px] w-full">
              {[0, 1].flatMap((copyIndex) => rows.flatMap((row, rowIndex) => row.map(([image, x, y], cardIndex) => (
                <Image
                  key={`${copyIndex}-${rowIndex}-${cardIndex}`}
                  className="absolute max-w-none object-contain"
                  src={`/assets/figma-home/hero/card-${String(image).padStart(2, "0")}.png`}
                  alt=""
                  width={309}
                  height={159}
                  sizes="309px"
                  style={{ left: x, top: copyIndex * 1428.48 + rowIndex * 476.16 + y, width: 309.272, height: 158.72 }}
                />
              ))))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1000px]">
        <div className="flex max-w-[560px] flex-col items-start gap-4 pt-[196px] text-left max-[1048px]:px-6">
          <h1 id="home-hero-title" className="m-0 max-w-[490px] text-[32px] leading-10 font-medium tracking-[-0.16px] text-white max-[600px]:text-[27px] max-[600px]:leading-9">
            Designer &amp; Builder.<br />Making complex products<br />easier to use.
          </h1>
          <p className="m-0 text-[16px] leading-6 font-normal tracking-[-0.32px] text-[#8f8f8f] max-[600px]:text-[14px]">
            Hey, I’m Vijay Saiwal 👋🏻 A product designer with 4+ years of SaaS experience. I bring research, workflows, and visual design together to make useful products easier to understand and use.
          </p>
          <div className="flex flex-wrap items-center gap-3" aria-label="Connect with Vijay">
            <ActionLink variant="primary" href={links.bookCall} target="_blank" rel="noopener noreferrer">
              Schedule an intro call
            </ActionLink>
            <ActionLink variant="secondary" href={links.linkedIn} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </ActionLink>
          </div>
        </div>
        <HomeBrandLogos />
      </div>
    </section>
  );
}
