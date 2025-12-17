import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMORI HEADSPACE",
  description:
    "A fan site dedicated to the game OMORI, exploring its characters, locations, quotes, and more.",
  icons: {
    icon: "/mewo.webp",
  },
  authors: [{ name: "Ondřej Pták", url: "https://github.com/florixak" }],
  keywords: [
    "OMORI",
    "Headspace",
    "Fan Site",
    "RPG",
    "Indie Game",
    "Characters",
    "Locations",
    "Quotes",
    "Tribute",
  ],
  creator: "Ondřej Pták",
  openGraph: {
    title: "OMORI HEADSPACE",
    description:
      "A fan site dedicated to the game OMORI, exploring its characters, locations, quotes, and more.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "OMORI HEADSPACE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OMORI HEADSPACE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
