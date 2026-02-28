import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Metal_Mania, Oswald } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import { ClientProviders } from "@/components/ClientProviders";
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

const title = "Tanatron — Death Metal";
const description = "Tanatron — Death Metal de São Luís/MA, Brasil. Músicas no Spotify, clipes no YouTube. Nossas redes, vídeos e músicas.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Tanatron",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
        <ClientProviders>
          <div className="min-w-0 w-full max-w-full overflow-x-clip">
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
