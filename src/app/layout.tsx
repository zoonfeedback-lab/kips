import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSansBody = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexSansDisplay = IBM_Plex_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
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
    <html lang="en" className={`${ibmPlexSansBody.variable} ${ibmPlexSansDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
