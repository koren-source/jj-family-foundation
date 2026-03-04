import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
