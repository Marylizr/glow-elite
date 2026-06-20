import Image from "next/image";

const steps = [
  { text: "Hydrate the skin: mesotherapy." },
  {
    text: "Provide uniformity of tone and luminosity:",
    bold: "Fraxel DUAL laser, PicoWay laser and peelings.",
  },
  {
    text: "Treat wrinkles:",
    bold: "injections with substances that block the facial muscles.",
  },
  {
    text: "Treat flaccidity:",
    bold: "radiofrequency monopolar Thermage CPT, radiofrequency fractional subablative.",
  },
];

export default function FacialRejuvenation() {
  return (
    <section id="rejuvenation" className="reveal-section bg-[#9B7446]">
      <div className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] md:min-h-[720px] lg:min-h-[760px]">
        <Image
          src="/img/optimized/banner2.png"
          alt="Facial rejuvenation"
          fill
          unoptimized
          className="object-cover object-[82%_center] sm:object-[70%_center] md:object-[64%_center] lg:object-[60%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-white/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(242,232,220,0.92)_0%,rgba(242,232,220,0.78)_42%,rgba(242,232,220,0.38)_70%,rgba(242,232,220,0.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(242,232,220,0.86)_0%,rgba(242,232,220,0.66)_35%,rgba(242,232,220,0.24)_58%,rgba(242,232,220,0)_82%)] md:w-[76%]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-5 py-10 sm:min-h-[680px] sm:px-8 md:min-h-[720px] lg:min-h-[760px]">
          <div className="max-w-[660px]">
            <h2 className="mb-7 text-4xl font-black leading-[0.95] text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
            Facial rejuvenation:<br />What does it mean?
            </h2>
            <p className="mb-16 max-w-[560px] text-base font-medium leading-relaxed text-[#2f2a26] sm:text-lg">
              Remove wrinkles? Luminous skin with glow and even tone? A more rested
              and fresher look? Skin with a uniform tone without spots or redness and
              closed pores? Be able to go out without makeup?
            </p>

            <ul className="max-w-[650px] space-y-3 text-[#4A2F22] drop-shadow-sm">
              {steps.map((s, i) => (
                <li key={i} className="text-base font-bold leading-snug sm:text-lg">
                  {s.text}{" "}
                  {s.bold && <strong className="font-black">{s.bold}</strong>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
