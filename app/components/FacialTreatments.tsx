import Image from "next/image";

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

export default function FacialTreatments() {
  return (
    <section id="facial" className="reveal-section bg-white">
      <div className="bg-[#F5EDE3]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_0.95fr] md:gap-12">
          <div>
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
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo/logo-01.png"
              alt="Glow Elite aesthetic clinic"
              width={620}
              height={500}
              className="h-auto w-full max-w-[320px] opacity-80 sm:max-w-[460px] md:max-w-[560px]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div className="relative h-[380px] w-full sm:h-[520px] md:h-[640px]">
            <Image
              src="/img/optimized/model3.png"
              alt="Facial treatment model"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <ul className="divide-y divide-[#eee3d8]">
            {treatments.map((t, i) => (
              <li key={i} className="facial-treatment-bullet flex items-start gap-3 py-4 sm:gap-4">
                <span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-[#BF9255]" />
                <div>
                  <strong className="mb-1 block text-[14px] text-[#5c5148]">{t.title}</strong>
                  <p className="text-[13px] leading-relaxed text-[#7b7168]">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
