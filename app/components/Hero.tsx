import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="reveal-section bg-white">
      {/* Main banner */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/img/optimized/banner.png"
          alt="Welcome to Glow Elite"
          width={2073}
          height={759}
          className="h-62.5 w-full object-cover sm:h-90 md:h-107.5"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#9B7446]/5 px-4 text-center">
          <p
            aria-hidden="true"
            className="absolute left-1/2 top-[16%] -translate-x-1/2 whitespace-nowrap text-[58px] font-black uppercase leading-none tracking-[0.03em] text-[#9B7446]/18 sm:top-[12%] sm:text-[112px] md:text-[150px] lg:text-[190px]"
          >
            Welcome
          </p>
          <Image
            src="/logo/logo_logo_white.png"
            alt="Glow Elite"
            width={360}
            height={260}
            className="relative z-10 mt-2 h-auto w-44 drop-shadow-xl sm:mt-8 sm:w-72 md:w-90"
            priority
          />
          <p className="relative z-10 mt-3 max-w-155 text-xs font-medium leading-relaxed text-[#5d4230] drop-shadow-sm sm:mt-5 sm:text-base">
            Aesthetic medicine, laser and anti-aging clinic in Barcelona
            <br className="hidden sm:block" />
            Our experience at your service
          </p>
        </div>
      </div>

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
          <div className="relative z-10 max-w-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}
