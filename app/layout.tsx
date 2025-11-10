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
