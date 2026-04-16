import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "KIPS Academy | Evening Skills Development",
  description:
    "A premium portfolio site for KIPS Academy showcasing evening skills development programs, professional affiliations, and admissions.",
  keywords: [
    "KIPS Academy",
    "Technical Education",
    "Skill Development",
    "Hazara",
    "Abbottabad",
    "Mansehra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
