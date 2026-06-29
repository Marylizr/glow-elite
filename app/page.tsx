import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FacialTreatments from "./components/FacialTreatments";
import FacialRejuvenation from "./components/FacialRejuvenation";
import BodyTreatments from "./components/BodyTreatments";
import AntiAging from "./components/AntiAging";
import LaserHairRemoval from "./components/LaserHairRemoval";
import Footer from "./components/Footer";
import BookNowBar from "./components/BookNowBar";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Glow Elite Aesthetic Clinic",
    ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/img/optimized/banner.png` } : {}),
    telephone: "+34934881207",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Passeig de Gràcia, 89, Pral.",
      postalCode: "08008",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: ["https://www.instagram.com/theGlowElite_clinique/"],
    medicalSpecialty: [
      "Aesthetic medicine",
      "Dermatology",
      "Laser hair removal",
      "Anti-aging medicine",
    ],
  };

  return (
    <main className="w-full overflow-x-hidden">
      <script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Navbar />
      <Hero />
      <BookNowBar />
      <FacialTreatments />
      <FacialRejuvenation />
      <BookNowBar />
      <BodyTreatments />
      <AntiAging />
      <LaserHairRemoval />
      <Footer />
    </main>
  );
}
