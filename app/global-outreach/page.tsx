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
          className={`px-6 ${
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
              <h2 className="text-[44px] font-normal text-brown-dark font-display mb-2">
                {country.name}
              </h2>
              <p className="text-[11px] font-medium text-[#8B5E3C] uppercase tracking-[0.12em] mb-6 font-body">
                {country.partners}
              </p>
              <p className="text-[#3D2515] text-base font-light mb-6 font-body leading-[1.8]">
                {country.description}
              </p>
              <a
                href={country.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[#8B5E3C] font-medium text-[13px] font-body hover:underline underline-offset-4"
              >
                {country.link.label} <span className="font-display italic inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
