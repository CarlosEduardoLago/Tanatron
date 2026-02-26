import type { Metadata } from "next";
import localFont from "next/font/local";
import { Metal_Mania, Oswald } from "next/font/google";
import "./globals.css";

const darkfont = localFont({
  src: "./fonts/DarkfontFromImage-Regular.ttf",
  variable: "--font-darkfont",
  display: "swap",
});

const metalMania = Metal_Mania({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo-metal",
});

const oswald = Oswald({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Tanatron — Death Metal",
  description:
    "Tanatron — Death Metal de São Luís/MA, Brasil. Músicas no Spotify, clipes no YouTube. Nossas redes, vídeos e músicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${darkfont.variable} ${metalMania.variable} ${oswald.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
