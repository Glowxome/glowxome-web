import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.glowxome.com"),
  title: {
    default: "GlowXome | Le jeu vidéo phygital & l’univers connecté",
    template: "%s | GlowXome",
  },
  description:
    "Découvrez GlowXome, le premier univers de jeu phygital associant le bracelet connecté Glow-Band, avatars numériques et origamis cosmiques.",
  keywords: [
    "GlowXome",
    "Glow-Band",
    "Jeu phygital",
    "Keny et Béguy",
    "Glow-Origami",
  ],
  alternates: {
    canonical: "https://www.glowxome.com",
  },
  openGraph: {
    title: "GlowXome | Le jeu vidéo phygital",
    description:
      "Rejoignez l’aventure GlowXome : transmutez vos efforts réels en puissance dans le jeu.",
    url: "https://www.glowxome.com",
    siteName: "GlowXome",
    locale: "fr_FR",
    type: "website",
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
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}