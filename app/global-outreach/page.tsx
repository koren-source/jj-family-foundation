import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { COUNTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Global Outreach",
  description:
    "Building generational self sufficiency requires collaboration across borders. Learn about our international partnerships in Brazil, India, and Uganda.",
};

export default function GlobalOutreachPage() {
  return (
    <>
      <HeroSection
        eyebrow="GLOBAL OUTREACH"
        headline="Impact Across Borders"
        subtitle="Building generational self sufficiency requires collaboration across borders. Through international outreach, we support trusted organizations that are already creating meaningful change within their communities."
      />

      {COUNTRIES.map((country, i) => (
        <section
          key={country.name}
          className={`py-20 md:py-28 px-6 ${
            i % 2 === 0 ? "bg-cream-light" : "bg-cream"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12 items-center`}
          >
            <div className="md:w-1/2">
              <ImagePlaceholder />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-brown-dark font-[family-name:var(--font-playfair)] mb-2">
                {country.name}
              </h2>
              <p className="text-sm font-bold text-terracotta uppercase tracking-wide mb-6 font-[family-name:var(--font-lato)]">
                {country.partners}
              </p>
              <p className="text-text-dark text-lg mb-6 font-[family-name:var(--font-lato)]">
                {country.description}
              </p>
              <a
                href={country.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta font-semibold hover:underline font-[family-name:var(--font-lato)]"
              >
                {country.link.label} &rarr;
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
