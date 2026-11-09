import Image from "next/image";

import home from "@/data/home.json";

// Ek group mein logos 2 baar repeat hotay hain taaki group screen se chaura ho.
// Phir poora group 2 baar render hota hai, aur track -50% tak move karta hai
// (seamless infinite loop).
const REPEAT_PER_GROUP = 2;
const SPEED_SECONDS = 50; // kam = tez, zyada = slow

export default function LogoMarquee({ data = home.logos }: { data?: typeof home.logos }) {
  const groupLogos = Array.from({ length: REPEAT_PER_GROUP }).flatMap(() => data.items);
  return (
    <>
      <style>{`
        @keyframes logo-marq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-marq-track {
          animation: logo-marq-scroll ${SPEED_SECONDS}s linear infinite;
        }
        .logo-marq-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .logo-marq-track { animation-play-state: paused; }
        }
      `}</style>

      <div
        className="relative flex min-h-28 py-6 w-full shrink-0 items-center overflow-hidden bg-black"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="logo-marq-track flex w-max will-change-transform">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-12 pr-12"
              aria-hidden={group === 1 ? true : undefined}
            >
              {groupLogos.map((logo, i) => (
                <div
                  key={`${group}-${i}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={group === 0 ? logo.alt : ""}
                    width={Math.round((logo.width / logo.height) * data.height)}
                    height={data.height}
                    loading="eager"
                    className={`block max-w-none object-contain opacity-65 transition-opacity duration-200 hover:opacity-100 ${logo.treatment === "invert" ? "grayscale invert mix-blend-screen" : "brightness-0 invert"}`}
                    style={{ height: data.height, width: "auto" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
