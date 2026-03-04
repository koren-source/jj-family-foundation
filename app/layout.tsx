import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JJ Family Foundation — Building Generational Self Sufficiency",
    template: "%s | JJ Family Foundation",
  },
  description:
    "Through education, advocacy, and meaningful connection, we empower families and communities to become self-sufficient and resilient.",
  openGraph: {
    title: "JJ Family Foundation",
    description:
      "Building Generational Self Sufficiency through education, advocacy, and meaningful connection.",
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
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
