import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
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
          className={`px-6 ${
            i % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12 items-center`}
          >
                        <div className="md:w-1/2 max-w-[480px]">
              <SectionLabel text={area.number} />
              <h2 className="text-[44px] md:text-[44px] font-light text-brown-dark font-display mt-3 mb-6">
                {area.title}
              </h2>
              <p className="text-[#3D2515] text-base font-light font-body leading-[1.8]">
                {area.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Closing Quote */}
      <section className="bg-cream px-6 py-[60px]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[26px] text-brown-mid font-display italic font-light leading-[1.5]">
            By strengthening what already works and connecting people to the
            right resources, we help communities build lasting generational
            change.
          </p>
        </div>
      </section>
    </>
  );
}
