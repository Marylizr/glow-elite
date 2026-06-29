import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const heroBackgroundImage = "/img/optimized/banner.png";
const heroModelPoster = "/img/optimized/chica-hero.webp";
const heroModelVideo = "https://res.cloudinary.com/da6il8qmv/video/upload/v1782760030/animacion-hero_yb210a.mp4";
const localHeroModelVideo = "/img/optimized/animacion-hero.mp4";

export default function Hero() {
  return (
    <section id="home" className="reveal-section w-full max-w-none overflow-hidden bg-white">
      {/* Main layered hero */}
      <div className="relative isolate min-h-[690px] w-full max-w-none overflow-hidden bg-[#fbf7ef] md:min-h-[620px]">
        <Image
          src={heroBackgroundImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,rgba(251,247,239,0.5)_0%,rgba(244,234,220,0.32)_44%,rgba(196,147,80,0.12)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(180deg,rgba(250,244,234,0)_0%,rgba(250,244,234,0)_48%,rgba(250,244,234,0.82)_76%,rgba(250,244,234,0.96)_100%),radial-gradient(circle_at_50%_70%,rgba(196,143,77,0.14),transparent_48%)] md:bg-[linear-gradient(90deg,rgba(250,244,234,0.96)_0%,rgba(250,244,234,0.86)_34%,rgba(250,244,234,0.48)_52%,rgba(250,244,234,0)_69%),radial-gradient(circle_at_24%_45%,rgba(196,143,77,0.12),transparent_42%)]" />

        <div className="relative z-10 flex min-h-[690px] w-full max-w-none flex-col px-0 pt-[342px] sm:pt-[420px] md:mx-auto md:min-h-[620px] md:max-w-6xl md:justify-center md:px-6 md:pt-0">
          <ScrollReveal className="order-2 flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-12 text-center md:order-1 md:min-h-[620px] md:w-[43%] md:px-0 md:pb-0 md:pt-0">
            <p
              aria-hidden="true"
              className="mb-4 text-[clamp(1.15rem,4.8vw,1.65rem)] font-extrabold uppercase tracking-[0.08em] text-[#a87942] opacity-[0.72] md:text-[clamp(1.25rem,1.6vw,1.8rem)] md:opacity-[0.68]"
            >
              Welcome
            </p>
            <Image
              src="/logo/logo-01.png"
              alt="Glow Elite"
              width={822}
              height={666}
              className="mb-7 h-auto w-[clamp(230px,68vw,340px)] drop-shadow-xl md:mb-8 md:w-[clamp(300px,24vw,460px)]"
              priority
            />
            <h1 className="sr-only">Glow Elite Aesthetic Clinic</h1>
            <p className="max-w-2xl text-[clamp(1.08rem,4vw,1.35rem)] font-[750] leading-[1.45] text-[#4c3328] drop-shadow-sm md:text-[clamp(1.35rem,1.85vw,2rem)]">
              Aesthetic medicine, laser and anti-aging clinic in Barcelona.
              <span className="block">Our experience at your service.</span>
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex min-h-14 min-w-[180px] items-center justify-center rounded-full bg-[#8B6B3F] px-8 py-4 text-base font-extrabold uppercase text-white shadow-[0_18px_42px_rgba(117,78,42,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#3b251c] hover:shadow-[0_22px_52px_rgba(117,78,42,0.3)] focus:outline-none focus:ring-2 focus:ring-[#8B6B3F] focus:ring-offset-2 md:mt-12 md:min-w-[220px] md:px-9 md:py-[1.05rem]"
            >
              Book Now
            </a>
          </ScrollReveal>
        </div>

        <div className="absolute left-0 right-0 top-0 z-0 h-[455px] w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] sm:h-[535px] md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[64vw] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_14%,#000_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,#000_14%,#000_100%)]">
          <video
            className="h-full w-full object-cover object-[52%_top] md:object-[46%_center]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroModelPoster}
            aria-label="Glow Elite model"
            >
              <source src={heroModelVideo} type="video/mp4" />
              <source src={localHeroModelVideo} type="video/mp4" />
              Your browser does not support the Glow Elite hero video.
            </video>
        </div>
      </div>

      <noscript>
        <Image
          src={heroModelPoster}
          alt="Glow Elite model"
          width={1013}
          height={759}
          className="h-auto w-full"
        />
      </noscript>

      {/* Skinceuticals strip */}
      <div className="flex flex-col bg-white md:min-h-150 md:flex-row">
        {/* Model image */}
        <div className="relative order-2 min-h-150 w-full shrink-0 sm:min-h-82.5 md:order-1 md:min-h-0 md:w-[38%]">
          <Image
            src="/img/optimized/model-hero-strip..png"
            alt="Glow Elite model"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 38vw, 100vw"
          />
        </div>

        {/* Content */}
        <div className="relative order-1 flex flex-1 flex-col items-center justify-center overflow-hidden bg-white px-5 py-10 text-center sm:px-8 sm:py-12 md:order-2">
          {/* Subtle bg watermark */}
          <div
            className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
            style={{ backgroundImage: "url('/img/optimized/model-hero-strip..png')" }}
          />
          <ScrollReveal className="relative z-10 max-w-xl" direction="right">
            <h2 className="mb-5 text-2xl font-bold leading-snug text-gold sm:text-3xl md:text-4xl">
              1st Skinceuticals Advanced<br />
              Medical Spa of Europe<br />
              A new experience for our patients
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
              Skinceuticals SPA combines the most innovative medical practices at
              the hands of the best experts. We offer the latest technology in skin
              care based on products with maximized concentrations, which guarantee
              their penetration for visible results.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
