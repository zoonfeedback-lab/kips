import type { Metadata } from "next";
import { Lexend, Hind } from "next/font/google";
import "./globals.css";

const hind = Hind({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lexend = Lexend({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Keyan Institute of Professional Studies | KIPS",
  description:
    "Keyan Institute of Professional Studies is a project of Mashal Technical Education System, offering IT, professional, academic, and vocational programs across Abbottabad, Haripur, Mansehra, Shinkiari, Baffa, Mirpur (AJK), and Garhi Habibullah.",
  keywords: [
    "Keyan Institute of Professional Studies",
    "KIPS",
    "Mashal Technical Education System",
    "IT courses",
    "professional studies",
    "vocational training",
    "Abbottabad",
    "Haripur",
    "Mansehra",
    "Mirpur AJK",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hind.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
