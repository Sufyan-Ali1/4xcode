import { jakarta, mono } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import home from "@/data/home.json";
const PARTICLES = [
  { x: 54.3, y: 4.2, s: 3, o: 0.7 },
  { x: 53.5, y: 9.8, s: 2, o: 0.5 },
  { x: 47.7, y: 20.1, s: 2, o: 0.4 },
  { x: 44.2, y: 46.8, s: 3, o: 0.55 },
  { x: 50.9, y: 49.0, s: 2, o: 0.45 },
  { x: 48.4, y: 52.1, s: 2, o: 0.35 },
  { x: 50.4, y: 58.3, s: 2, o: 0.4 },
  { x: 49.7, y: 40.2, s: 2, o: 0.3 },
  { x: 49.0, y: 88.3, s: 2, o: 0.35 },
  { x: 40.3, y: 95.7, s: 2, o: 0.3 },
  { x: 69.1, y: 91.0, s: 3, o: 0.55 },
  { x: 74.9, y: 90.7, s: 2, o: 0.45 },
  { x: 56.8, y: 13.0, s: 2, o: 0.5 },
  { x: 63.4, y: 95.0, s: 2, o: 0.4 },
  { x: 72.5, y: 13.5, s: 2, o: 0.3 },
  { x: 39.0, y: 62.0, s: 2, o: 0.25 },
  { x: 45.5, y: 30.5, s: 2, o: 0.3 },
  { x: 58.5, y: 28.0, s: 2, o: 0.3 },
  { x: 62.0, y: 6.5, s: 2, o: 0.35 },
  { x: 42.0, y: 76.0, s: 2, o: 0.3 },
  { x: 56.0, y: 78.5, s: 2, o: 0.3 },
  { x: 80.0, y: 78.0, s: 2, o: 0.3 },
  { x: 78.5, y: 30.0, s: 2, o: 0.28 },
  { x: 36.0, y: 36.0, s: 2, o: 0.25 },
];
const LINK_NEIGHBORS = 2;
const ASPECT = 1.6;
const DOT_SCALE = 0.85;
const LINK_COLOR = "rgba(255,75,88,0.07)";
const LINK_WIDTH = 0.75;
const LINKS: [number, number][] = (() => {
  const seen = new Set<string>();
  const out: [number, number][] = [];
  PARTICLES.forEach((a, i) => {
    PARTICLES.map((b, j) => ({
      j,
      d: Math.hypot((a.x - b.x) * ASPECT, a.y - b.y),
    }))
      .filter((n) => n.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, LINK_NEIGHBORS)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(key)) {
          seen.add(key);
          out.push([i, j]);
        }
      });
  });
  return out;
})();

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconGear = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconGlobe = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5c2.6 2.8 4 6 4 9.5s-1.4 6.7-4 9.5c-2.6-2.8-4-6-4-9.5s1.4-6.7 4-9.5z" />
  </svg>
);
const IconCloud = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    <path d="M17.5 19H7a5 5 0 1 1 1.1-9.88A6 6 0 0 1 19.6 11.5 3.8 3.8 0 0 1 17.5 19z" />
  </svg>
);
const IconChart = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-8" />
    <path d="M22 20H2" />
    <path d="M20 20V8" />
  </svg>
);

const IconImage = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 16l3.5-4 3 3 2-2 3 3" />
  </svg>
);

const IconArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12h16" />
    <path d="M14 6l6 6-6 6" />
  </svg>
);

const chip =
  `${mono.className} absolute flex items-center gap-[7.5px] h-[25px] px-3 rounded-[8px] ` +
  "bg-[rgba(24,6,9,0.84)] border border-[rgba(255,75,88,0.2)] " +
  "shadow-[0_6px_20px_rgba(0,0,0,0.35)] backdrop-blur-[6px] " +
  "text-[8.6px] tracking-[0.05em] text-white/80 whitespace-nowrap " +
  "max-sm:scale-[0.65] max-sm:origin-top-left";

const ficon =
  "shrink-0 flex items-center justify-center w-6 h-[25px] rounded-[6px] text-[#f0283a] " +
  "bg-[rgba(60,10,14,0.55)] border border-[rgba(240,40,58,0.32)] " +
  "shadow-[inset_0_0_8px_rgba(240,40,58,0.08)]";

const fitem = "flex items-center gap-[9px] min-w-[9rem] last:min-w-0";
const ftitle =
  "text-[11.6px] leading-[15px] font-medium text-white tracking-[-0.005em] whitespace-nowrap";
const fsub = "text-[9.75px] leading-[15px] text-white/50 whitespace-nowrap";

export default function Hero({ data = home.hero }: { data?: typeof home.hero }) {
  return (
    <section
      className={`${jakarta.className} relative flex w-full pt-35 justify-center overflow-hidden min-[1120px]:pb-0 text-white`}
      style={{
        background:
          "linear-gradient(180deg,#3b0a0e 0%,#2a0709 38%,#1a0607 68%,#0d0405 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 38% 48% at 0% 26%, rgba(125,8,14,0.95) 0%, rgba(95,8,13,0.6) 40%, rgba(60,8,11,0) 100%), radial-gradient(ellipse 30% 30% at 12% 70%, rgba(70,8,12,0.35) 0%, rgba(70,8,12,0) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 34% 52% at 66% 50%, rgba(110,10,18,0.38) 0%, rgba(110,10,18,0) 100%), radial-gradient(ellipse 28% 24% at 66% 92%, rgba(90,8,14,0.28) 0%, rgba(90,8,14,0) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,3,4,0) 70%, rgba(10,3,4,0.55) 100%), linear-gradient(180deg, rgba(10,3,4,0) 70%, rgba(8,3,4,0.7) 100%), radial-gradient(ellipse 60% 60% at 50% 45%, rgba(0,0,0,0) 55%, rgba(8,2,3,0.35) 100%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={PARTICLES[a].x}
            y1={PARTICLES[a].y}
            x2={PARTICLES[b].x}
            y2={PARTICLES[b].y}
            stroke={LINK_COLOR}
            strokeWidth={LINK_WIDTH}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#ff3b4a] pointer-events-none shadow-[0_0_6px_rgba(255,59,74,0.8)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s * DOT_SCALE,
            height: p.s * DOT_SCALE,
            opacity: p.o,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <div className="relative px-5 flex w-full flex-col max-w-[1150px] items-center justify-between gap-14  min-[1120px]:flex-row min-[1120px]:items-start min-[1120px]:gap-[14px]">

        <div className="min-w-0 w-full min-[1120px]:w-[600px]">
          <div
            className={`${mono.className} inline-flex px-3 items-center h-[25px] rounded-full bg-[#0b0405] border border-white/[0.07] shadow-[0_4px_14px_rgba(0,0,0,0.35)] text-[8.3px] font-bold tracking-[0.14em] text-[#f4eaea] whitespace-nowrap max-sm:whitespace-normal max-sm:flex-wrap max-sm:h-auto max-sm:py-2 max-sm:rounded-2xl max-sm:text-[9px]`}
          >
            <span className="w-[7.5px] h-[7.5px] rounded-full bg-[#ee1c2e] mr-[7.5px] shadow-[0_0_6px_rgba(238,28,46,0.9)]" />
            {data.eyebrow.map((text, index) => <span key={text}>{index > 0 && <span className="mx-[7px] font-normal text-[#e32134]">{data.separator}</span>}{text}</span>)}
          </div>
          <h1 className="mt-[25px] font-bold text-white tracking-[-0.052em] text-[38px] leading-[37px] sm:text-[54px] sm:leading-[52.5px]">
            {data.heading.map((line, index) => <span key={line} className={`block mt-1 ${index === data.heading.length - 1 ? "text-[#e8203a]" : ""}`}>{line}</span>)}
          </h1>
          <p className="mt-4 max-w-[25.5rem] text-[15px] leading-[21px] tracking-[-0.005em] text-[rgba(236,218,219,0.64)]">
            {data.description}
          </p>
          <div className="mt-[30px] flex gap-4 max-sm:flex-col">
            <Link
              href={data.actions[0].href}
              className="flex flex-wrap items-center gap-5  justify-center text-center py-3 px-4 rounded-[5px] text-[15px] font-medium tracking-[-0.005em] text-white no-underline bg-gradient-to-b from-[#e8202f] to-[#dc1627] shadow-[0_8px_24px_rgba(226,24,42,0.32),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(226,24,42,0.5),inset_0_1px_0_rgba(255,255,255,0.18)]"
            >
            <span>{data.actions[0].label}</span>
              <IconArrow />
            </Link>
            <Link
              href={data.actions[1].href}
              className="flex flex-wrap items-center gap-5 lg:gap-10 justify-center py-4 px-4 rounded-[8px] text-[15px] font-medium tracking-[-0.005em] text-white no-underline bg-[#110608] border border-[rgba(255,60,75,0.2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,60,75,0.45)]"
            >
              <span>{data.actions[1].label}</span>
              <i className="w-1 h-1 rounded-full bg-white/45 mr-0.5" />
            </Link>
          </div>
          <div className="mt-[42px] h-px w-full bg-white/[0.075]" />
          <div className="mt-[26px] flex flex-wrap gap-y-5">
            {data.features.map((feature) => (
              <div key={feature.title} className={fitem}>
                <span className={ficon}>{feature.icon === "code" ? <span aria-hidden="true">&lt;/&gt;</span> : feature.icon === "globe" ? <IconGlobe size={11} /> : feature.icon === "gear" ? <IconGear size={11} /> : <IconImage size={11} />}</span>
                <div><div className={ftitle}>{feature.title}</div><div className={fsub}>{feature.subtitle}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative shrink-0 max-w-full min-[1120px]:mt-[9px]">
          <div
            className="absolute pointer-events-none blur-[14px]"
            style={{
              left: "6%",
              top: "4%",
              width: "88%",
              height: "80%",
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(220,20,35,0.22) 0%, rgba(220,20,35,0) 68%)",
            }}
          />
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={469}
            height={499}
            priority
            className="relative block h-auto max-w-full opacity-[0.92]"
             style={{
              objectFit: "contain",
              filter: "brightness(0.8)",
  }} />
          {data.chips.map((item) => (
            <div key={item.label} className={chip} style={{ left: item.left, top: item.top }}>
              <span className="inline-flex text-[#f0283a]" aria-hidden="true">
                {item.icon === "gear" ? <IconGear /> : item.icon === "globe" ? <IconGlobe /> : item.icon === "cloud" ? <IconCloud /> : item.icon === "chart" ? <IconChart /> : item.icon === "code" ? <span>&lt;/&gt;</span> : <span className="w-[5px] h-[5px] rounded-full bg-[#f0222f]" />}
              </span>
              <span>{item.label}</span>
              {item.detail && <span className="text-[#f0283a]">{item.detail}</span>}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
