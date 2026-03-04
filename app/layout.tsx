import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
