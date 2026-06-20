import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Glow Elite Aesthetic Clinic | Barcelona",
    template: "%s | Glow Elite Aesthetic Clinic",
  },
  description:
    "Advanced aesthetic medicine, facial treatments, anti-aging care, body treatments and laser hair removal in Barcelona.",
  applicationName: "Glow Elite Aesthetic Clinic",
  keywords: [
    "aesthetic clinic Barcelona",
    "medical spa Barcelona",
    "facial treatments Barcelona",
    "laser hair removal Barcelona",
    "anti-aging clinic Barcelona",
    "body treatments Barcelona",
  ],
  authors: [{ name: "Glow Elite Aesthetic Clinic" }],
  creator: "Glow Elite Aesthetic Clinic",
  publisher: "Glow Elite Aesthetic Clinic",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Glow Elite Aesthetic Clinic | Barcelona",
    description:
      "Advanced aesthetic medicine, facial treatments, anti-aging care, body treatments and laser hair removal in Barcelona.",
    type: "website",
    locale: "en_ES",
    siteName: "Glow Elite Aesthetic Clinic",
    images: [
      {
        url: "/img/optimized/banner.png",
        width: 2073,
        height: 759,
        alt: "Glow Elite Aesthetic Clinic in Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Elite Aesthetic Clinic | Barcelona",
    description:
      "Advanced aesthetic medicine, facial treatments, anti-aging care, body treatments and laser hair removal in Barcelona.",
    images: ["/img/optimized/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
