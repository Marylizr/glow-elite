import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const caseList = [
  "Analysis (blood, urine, feces, hair, saliva) to assess the current status of the person",
  "Genetic study of polymorphisms that predispose to lipid profile alterations, atherosclerosis, hypertension, cardiovascular diseases, deep vein thrombosis and arteries, breast cancer, prostate, lung, colon, Alzheimer's disease, osteoporosis, obesity, endocrine disorders …",
  "Lifestyle evaluation",
  "Evaluation of physical activity",
  "Study of positive emotions and attitudes",
  "Sleep studies",
  "Study of sun exposure",
  "Study of exposure to environmental and toxic pollution",
  "Study of eating habits",
];

const antiAgingVideo = "https://res.cloudinary.com/da6il8qmv/video/upload/v1782760028/animacion1_tmlwgy.mp4";
const localAntiAgingVideo = "/img/optimized/animacion1.mp4";

export default function AntiAging() {
  return (
    <section id="antiaging" className="reveal-section bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Top grid */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.9fr_0.75fr] md:gap-12">
          <ScrollReveal>
            <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#C7A678] sm:mb-8 sm:text-5xl md:text-6xl">
              Anti Aging
            </h2>
            <p className="mb-5 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              In the history of humanity, aging is considered a normal physiological
              process for which much can not be done.
            </p>
            <p className="mb-5 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              However, recently, and thanks to medical progress, aging is considered a
              process besides physiological, pathological, for which measures can be taken
              to delay it and reduce its impact.
            </p>
            <p className="mb-8 text-[15px] font-semibold leading-relaxed text-[#5c5148]">
              Thus, in current medicine, we have antiaging and preventive treatments.
            </p>
            <p className="mb-4 text-[13px] leading-relaxed text-[#7b7168]">
              There are two types of age: the chronological (the years are added
              arithmetically each time 365 days pass) and the biological (the wear and
              tear that our body undergoes throughout life).
            </p>
            <p className="text-[13px] leading-relaxed text-[#7b7168]">
              The biological age can vary according to the lifestyle. Thus a sedentary
              person, with stress, unbalanced diet and little rest, may have a biological
              age superior to their chronological age. On the contrary, healthy habits,
              diet and exercise and personalized preventive measures can make our biological
              age less than chronological. It is &quot;being young&quot; or &quot;being old&quot; that matters.
            </p>
          </ScrollReveal>

          <div className="relative h-[420px] w-full sm:h-[560px] md:h-[620px]">
            <video
              className="h-full w-full object-cover object-top"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/img/optimized/model6.png"
              aria-label="Anti aging model"
            >
              <source src={antiAgingVideo} type="video/mp4" />
              <source src={localAntiAgingVideo} type="video/mp4" />
              Your browser does not support the anti-aging video.
            </video>
          </div>
        </div>

        {/* Center paragraph */}
        <ScrollReveal className="mx-auto mb-12 max-w-4xl">
          <p className="text-center text-[14px] leading-relaxed text-[#7b7168]">
            It consists of an exhaustive clinical history, a physical examination and an
            analysis to evaluate the biological age of each person. The factors that determine
            the biological age will be identified and a personalized treatment will be
            recommended to restore the balance and prevent the appearance of diseases, in
            order to stop the natural process of aging, and improve the health and quality of life.
          </p>
        </ScrollReveal>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 items-center gap-8 bg-[#EEF1EE] md:grid-cols-[0.9fr_1fr] md:gap-12">
          <div className="relative h-[340px] w-full sm:h-[440px] md:h-[520px]">
            <Image
              src="/img/optimized/model-antiaging-bottom.jpg"
              alt="Anti aging treatment"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <ScrollReveal className="px-0 pb-8 md:px-6 md:pb-0">
            <h3 className="mb-6 font-serif text-2xl font-semibold leading-snug text-[#9B7446] sm:text-3xl">
              Thus, depending on the case,<br />it will be carried out:
            </h3>
            <ul className="space-y-1.5">
              {caseList.map((item, i) => (
                <li key={i} className="text-[13px] leading-relaxed text-[#6c6259]">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
