import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FOCUS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Focus Areas",
  description:
    "We strengthen families and communities by investing in education, leadership, and long term economic stability.",
};

export default function FocusAreasPage() {
  return (
    <>
      <HeroSection
        eyebrow="FOCUS AREAS"
        headline="Where We Strengthen Communities"
        subtitle="We strengthen families and communities by investing in education, leadership, and long term economic stability. Through strategic partnerships and faith centered collaboration, we expand the reach of programs that are already making a meaningful difference."
      />

      {FOCUS_AREAS.map((area, i) => (
        <section
          key={area.number}
          className={`py-20 md:py-28 px-6 ${
            i % 2 === 0 ? "bg-white" : "bg-cream"
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
              <SectionLabel text={area.number} />
              <h2 className="text-2xl md:text-3xl font-semibold text-brown-dark font-[family-name:var(--font-playfair)] mt-3 mb-6">
                {area.title}
              </h2>
              <p className="text-text-dark text-lg font-[family-name:var(--font-lato)]">
                {area.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Closing Quote */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-brown-mid font-[family-name:var(--font-playfair)] italic">
            By strengthening what already works and connecting people to the
            right resources, we help communities build lasting generational
            change.
          </p>
        </div>
      </section>
    </>
  );
}
