import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark no-scroll-x w-full max-w-full overflow-x-clip">
      <body
        className={`${darkfont.variable} ${metalMania.variable} ${oswald.variable} font-sans antialiased w-full max-w-full min-w-0 overflow-x-clip`}
      >
        <div className="min-w-0 w-full max-w-full overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
