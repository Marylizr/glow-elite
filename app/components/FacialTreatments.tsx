import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const treatments = [
  {
    title: "Facial treatment for pigmentation spots:",
    desc: "to even the skin tone and improve luminosity with medical aesthetic protocols.",
  },
  {
    title: "Facial treatment to close the pore size:",
    desc: "velvety-looking skin with less dilated pores.",
  },
  {
    title: "Facial treatment for scars:",
    desc: "either caused by cystic acne, by accident or post-surgery.",
  },
  {
    title: "Facial rejuvenation treatment:",
    desc: "to correct and to prevent the signs of chronological aging.",
  },
  {
    title: "Facial treatment for cuperosis or redness:",
    desc: 'if we have sensitive skin and / or redness or "spider veins".',
  },
  {
    title: "Facial treatment for active acne:",
    desc: "it is important to treat acne because in some people it causes low self-esteem and desire to avoid social life. It can also leave permanent scars on the face. The treatment depends on the type of acne.",
  },
];

const animatedLogoVideo = "https://res.cloudinary.com/da6il8qmv/video/upload/v1782760026/logo-animado_mubcpv.mp4";
const localAnimatedLogoVideo = "/img/optimized/logo-animado.mp4";

export default function FacialTreatments() {
  return (
    <section id="facial" className="reveal-section bg-white">
      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_0.95fr] md:gap-12">
          <ScrollReveal className="facial-copy-waves relative overflow-hidden py-4" direction="right">
            <h2 className="font-serif text-4xl font-semibold leading-none text-[#C7A678] sm:text-5xl md:text-7xl">
              Facial<br />Treatments
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#6c6259] sm:text-base">
              What do we mean or understand by facial beauty? The face says a lot about us.
              It can show our mood and our health. Also, when we socialize, we look ourselves
              in the face. Thus, the face is a very important part of us.
              <br /><br />
              Thanks to our treatments for the face, we can improve some aspect of ourselves
              that we do not like to have more facial harmony or symmetry, treat any pathology
              of the skin or try to look younger.
            </p>
          </ScrollReveal>

          <div className="flex justify-center md:justify-end">
            <video
              className="h-auto w-full max-w-[320px] opacity-90 sm:max-w-[460px] md:max-w-[560px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Glow Elite aesthetic clinic"
            >
              <source src={animatedLogoVideo} type="video/mp4" />
              <source src={localAnimatedLogoVideo} type="video/mp4" />
              Glow Elite aesthetic clinic
            </video>
          </div>
        </div>
      </div>

      <div className="bg-cream">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[560px] md:min-h-[760px] md:h-auto">
            <Image
              src="/img/optimized/model3.png"
              alt="Facial treatment model"
              fill
              className="object-cover object-[45%_top]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <ul className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:pr-[max(2rem,calc((100vw-72rem)/2))]">
            {treatments.map((t, i) => (
              <li key={i} className="border-b border-[#e6d8c8] py-5 last:border-b-0 md:py-6">
                <ScrollReveal className="flex items-start gap-4 sm:gap-5" delayMs={i * 90} direction="right">
                  <span className="mt-2 h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-[#BF9255]" />
                  <div>
                    <strong className="mb-2 block text-[17px] leading-snug text-[#5c5148] md:text-[19px]">
                      {t.title}
                    </strong>
                    <p className="text-[15px] leading-relaxed text-[#7b7168] md:text-[17px]">
                      {t.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
