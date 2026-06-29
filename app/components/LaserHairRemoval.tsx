import Image from "next/image";
import BookNowBar from "./BookNowBar";
import ScrollReveal from "./ScrollReveal";

const laserHairRemovalVideo = "https://res.cloudinary.com/da6il8qmv/video/upload/v1782766368/animacion4_ahssf2.mp4";
const localLaserHairRemovalVideo = "/img/optimized/animacion4.mp4";

export default function LaserHairRemoval() {
  return (
    <section id="laser" className="reveal-section bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Top grid */}
        <div className="mb-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_0.8fr] md:gap-12">
          <ScrollReveal>
            <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#C7A678] sm:mb-8 sm:text-5xl md:text-6xl">
              Laser hair<br />removal
            </h2>
            <p className="mb-5 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              Currently, there is a huge and increasing demand on permanent hair removal,
              thus avoiding the tedious sessions with wax or shaving.
            </p>
            <p className="mb-5 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              Laser hair removal is the best solution. But when it comes to choosing a laser
              hair removal center, it is important to have in mind clear criteria of safety
              and effectiveness, as well as being in expert hands.
            </p>
            <p className="mb-8 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              Glow Elite is a medical center in Barcelona where we do male and female laser
              hair removal with years of experience.
            </p>
          </ScrollReveal>

          <div className="relative h-[360px] w-full sm:h-[500px] md:h-[560px]">
            <Image
              src="/img/optimized/hair-removal.png"
              alt="Laser hair removal model"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

      </div>
      <BookNowBar />
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Bottom grid */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1fr] md:gap-12">
          <div className="relative h-[420px] w-full sm:h-[560px] md:h-[700px]">
            <video
              className="h-full w-full object-cover object-top"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/img/optimized/modelo10.png"
              aria-label="Laser hair removal model 2"
            >
              <source src={laserHairRemovalVideo} type="video/mp4" />
              <source src={localLaserHairRemovalVideo} type="video/mp4" />
              Your browser does not support the laser hair removal video.
            </video>
          </div>

          <ScrollReveal>
            <h3 className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#9B7446] sm:text-3xl">
              Is laser hair removal different<br />in men and women?
            </h3>
            <p className="mb-4 text-[13px] leading-relaxed text-[#6c6259]">
              Hair removal in men and women with laser has some differences. The medical laser
              device is the same but the parameters that the professional chooses as well as
              the number of sessions and interval between each session is different. Thus, men
              generally have thicker hair and higher density of follicles than women and continue
              to create new follicles up to 40 years. Therefore, depilation in men requires specific
              parameters with smaller fluences and longer pulses, more sessions and more interval
              of time between session and session than laser hair removal in women.
            </p>
            <p className="mb-10 text-[13px] leading-relaxed text-[#6c6259]">
              Therefore, it is important that the professional who is going to perform laser hair
              removal sets the parameters based on the age and sex of the patient as well as the
              color, thickness and density of hair for a satisfactory result.
            </p>

            <h3 className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#9B7446] sm:text-3xl">
              Clinic proposal for<br />laser hair removal
            </h3>
            <p className="mb-4 text-[13px] leading-relaxed text-[#6c6259]">
              We eliminate hair with a medical laser device, which achieves absolute success. The
              system we use to remove hair is a laser that emits a light that passes through the
              epidermis and reaches the hair follicle in the dermis where it is absorbed. The energy
              is transformed into heat and destroys the hair follicle.
            </p>
            <p className="text-[13px] leading-relaxed text-[#6c6259]">
              We use the latest laser technology to remove hair called GENTLE MAX PRO. Laser of last
              generation that obtains totally satisfactory results for our male and female patients in
              hair removal. Not only we perform laser hair removal effectively but we also take special
              care of the skin of the area to be treated. The treatment of laser hair removal is
              indicated for men and women.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
