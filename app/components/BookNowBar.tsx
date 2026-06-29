export default function BookNowBar() {
  const phrases = [
    "Book Now",
    "Luxury Aesthetic Medicine",
    "Advanced Skin Treatments",
    "Laser & Anti-Aging Clinic",
    "Your Glow Starts Here",
  ];

  return (
    <a
      href="#contact"
      className="group block overflow-hidden bg-[#8B6B3F] py-3 text-base font-semibold text-white transition-colors hover:bg-[#73562F] sm:text-lg"
      aria-label="Book Now"
    >
      <span className="book-now-marquee flex w-max items-center gap-10 whitespace-nowrap px-6">
        {[...phrases, ...phrases].map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="inline-flex items-center gap-10">
            <span>{phrase}</span>
            <span aria-hidden="true" className="text-white/55">
              •
            </span>
          </span>
        ))}
      </span>
    </a>
  );
}
