export default function Footer() {
  return (
    <footer id="contact" className="bg-[#E7CFB5] px-4 py-5 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8 items-center">
        {/* Phone */}
        <a
          href="tel:+34934881207"
          className="flex max-w-full items-center justify-center gap-2 text-center text-sm text-gray-600 hover:text-[#563A2D] transition-colors"
        >
          <svg className="w-5 h-5 flex-shrink-0 stroke-[#BF9255]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>+34 934 881 207</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/theGlowElite_clinique/"
          target="_blank"
          rel="noreferrer"
          className="flex max-w-full items-center justify-center gap-2 text-center text-sm text-gray-600 hover:text-[#563A2D] transition-colors"
        >
          <svg className="w-5 h-5 flex-shrink-0 stroke-[#BF9255]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>@theGlowElite_clinique</span>
        </a>

        {/* Address */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Passeig%20de%20Gracia%2089%2008008%20Barcelona"
          target="_blank"
          rel="noreferrer"
          className="flex max-w-full items-start justify-center gap-2 text-center text-sm text-gray-600 hover:text-[#563A2D] transition-colors"
        >
          <svg className="mt-0.5 w-5 h-5 flex-shrink-0 stroke-[#BF9255]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="min-w-0 break-words">Passeig de Gràcia, 89 · Pral. 08008 Barcelona</span>
        </a>
      </div>
    </footer>
  );
}
