import Image from "next/image";

const LOGO_SLIDES = [
  "/assets/slide1.webp",
  "/assets/slide2.webp",
  "/assets/slide3.webp",
  "/assets/slide4.webp",
  "/assets/slide5.webp",
  "/assets/slide6.webp",
  "/assets/slide7.webp",
];

// Ek group mein logos 2 baar repeat hotay hain taaki group screen se chaura ho.
// Phir poora group 2 baar render hota hai, aur track -50% tak move karta hai
// (seamless infinite loop).
const REPEAT_PER_GROUP = 2;
const SPEED_SECONDS = 50; // kam = tez, zyada = slow

const GROUP_LOGOS = Array.from({ length: REPEAT_PER_GROUP }).flatMap(
  () => LOGO_SLIDES
);

export default function LogoMarquee() {
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
        className="relative flex h-28 pt-10 w-full shrink-0 items-center overflow-hidden bg-black"
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
              {GROUP_LOGOS.map((src, i) => (
                <div
                  key={`${group}-${i}`}
                  className="flex h-20 w-28 shrink-0 items-center justify-center transition-transform duration-300 ease-out hover:scale-110"
                >
                  <Image
                    src={src}
                    alt={group === 0 ? "Partner logo" : ""}
                    width={110}
                    height={80}
                    className="object-contain h-[80px] opacity-65 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
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
