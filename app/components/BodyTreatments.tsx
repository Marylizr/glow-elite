import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const bodyTreatmentVideo = "https://res.cloudinary.com/da6il8qmv/video/upload/v1782763491/animation2_jtya61.mp4";
const localBodyTreatmentVideo = "/img/optimized/animation2.mp4";

export default function BodyTreatments() {
  return (
    <section id="body" className="reveal-section bg-cream">
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
        {/* Top grid */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_0.8fr] md:gap-12">
          {/* Text */}
          <div>
            <ScrollReveal>
              <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#C7A678] sm:text-5xl md:text-6xl">
                Body Treatments
              </h2>
              <p className="mb-6 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
                We are pioneers in new body medical technologies and have designed
                specific protocols for the following demands of body aesthetics.
              </p>
            </ScrollReveal>

            {[
              {
                title: "Flaccidity:",
                desc: "with corporal firming medical techniques that use monopolar or bipolar body radiofrequency, infrared, carboxytherapy, injection of firming substances, tension threads, nutritional supplements and specific diet.",
              },
              {
                title: "Cellulite:",
                desc: "with medical techniques of bipolar radiofrequency, infrared, carboxytherapy, injection of lipolytic and draining substances, mesotherapy, nutritional supplements, specific diet and exercise.",
              },
              {
                title: "Localized fat (abdomen, flanks, outer and inner thighs, knees, arms, chin …):",
                desc: "with corporal reduction treatments based on medical techniques of cryolipolysis, radiofrequency, infrared, carboxytherapy, lipolytic substances injection and mesotherapy. Obesity: The PnK® method offered by Dr. Ribé, reduces weight and it is the only method designed to combat adipose tissue inflammation and the consequent chronic obesity due to weight recovery.",
              },
              {
                title: "Stretch marks:",
                desc: "with Fraxel fractional laser medical techniques, fractional radiofrequency, carboxytherapy, injection of collagen inducing substances and nutritional supplements. Varicose veins: with sclerotherapy and vascular laser. Nail fungus: Ribe Clinic performs the new Nd: Yag laser to treat the pathology known as \"onychomycosis\" or nail fungus.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} className="mb-5" delayMs={i * 80}>
                <strong className="mb-1 block text-[14px] text-[#5c5148]">{item.title}</strong>
                <p className="text-[13px] leading-relaxed text-[#7b7168]">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Model image */}
          <div className="relative h-90 w-full sm:h-125 md:h-162.5">
            <video
              className="h-full w-full object-cover object-top"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/img/optimized/modelo8.png"
              aria-label="Body treatment model"
            >
              <source src={bodyTreatmentVideo} type="video/mp4" />
              <source src={localBodyTreatmentVideo} type="video/mp4" />
              Your browser does not support the body treatment video.
            </video>
          </div>
        </div>

        {/* Extra paragraph row */}
        <div className="grid grid-cols-1 gap-6 pb-12 text-[14px] leading-relaxed text-[#7b7168] md:grid-cols-2 md:gap-12">
          <ScrollReveal>
            <p>
              AT Glow Elite Clinic we advise and recommend the most appropriate body
              treatments to meet patient&apos;s expectations individually. Thus:
              <br /><br />
              We decide on the body treatment protocol based on the patient&apos;s condition
              and expectations. It is an individualized treatment to achieve the corporal
              aesthetic results requested. We prescribe a maintenance body treatment plan
              and teach healthy life habits.
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <p>
              Currently, there is an increase interest on body aesthetics and our patients
              often request about corporal treatments.
              <br /><br />
              Both either men or women demand about aesthetic body treatments to lose weight,
              eliminate fat from localized areas, remodeling, treating cellulite, flaccidity
              and varicose veins.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Circle with logo */}
      <div className="flex justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="relative flex aspect-square w-[min(78vw,340px)] items-center justify-center sm:w-105 md:w-120">
          <div className="absolute inset-[-12%] rounded-full border border-gold/35" />
          <div className="absolute inset-[-9%] rotate-[-18deg] rounded-[45%] border border-[#DDBB82]/55" />
          <div className="absolute inset-[-6%] rotate-16 rounded-[48%] border border-[#B78445]/45" />
          <div className="absolute inset-[-3%] rounded-full bg-[radial-gradient(circle,rgba(191,146,85,0.18)_0%,rgba(191,146,85,0.08)_46%,rgba(191,146,85,0)_70%)] blur-sm" />

          <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-gold bg-[#24170f] shadow-[0_16px_45px_rgba(86,58,45,0.18)]">
            <Image
              src="/img/optimized/model5.png"
              alt="Glow Elite body"
              fill
              className="object-cover object-top"
              sizes="(min-width: 640px) 480px, 340px"
            />
            {/* White logo overlay */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
              <Image
                src="/logo/logo_logo_white.png"
                alt="Glow Elite"
                width={120}
                height={80}
                className="h-auto w-20 opacity-95 sm:w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
