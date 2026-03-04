import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Gardner family and their commitment to building generational self sufficiency through education, advocacy, and meaningful connection.",
};

const familyMembers = [
  { name: "Jeff Gardner", role: "Co-Founder" },
  { name: "Janeen Gardner", role: "Co-Founder" },
  { name: "Ellie Gardner", role: "Daughter" },
  { name: "Addison Gardner", role: "Daughter" },
  { name: "Paisley Gardner", role: "Daughter" },
  { name: "Jules Gardner", role: "Daughter" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="ABOUT US"
        headline="A Family Committed to Generational Change"
      />

      {/* Foundation Story */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="text-text-dark text-lg font-[family-name:var(--font-lato)]">
              JJ Family Foundation was founded by the Gardner family with a
              shared commitment to building generational self sufficiency. Led by
              Jeff and Janeen Gardner and their four daughters, Ellie, Addison,
              Paisley, and Jules, the foundation reflects their belief that
              strong families are the foundation of thriving communities.
            </p>
            <p className="text-text-dark text-lg font-[family-name:var(--font-lato)]">
              As a family centered organization, our mission is rooted in
              education, advocacy, and meaningful connection. We believe lasting
              change is achieved by strengthening what already works. By
              supporting trusted organizations, empowering local leadership, and
              investing in sustainable initiatives, we help communities build
              resilience that extends far beyond a single generation.
            </p>
            <p className="text-text-dark text-lg font-[family-name:var(--font-lato)]">
              Our work focuses on financial literacy, education access,
              entrepreneurship, family stability, addiction recovery, and
              community leadership development. Through both local and
              international outreach, we remain committed to equipping families
              with the knowledge, opportunity, and support needed to become self
              sufficient and resilient.
            </p>
          </div>
          <div className="md:w-1/2">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Mission Blockquote */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-terracotta pl-6 py-2">
            <p className="text-xl text-brown-mid font-[family-name:var(--font-playfair)] italic leading-relaxed">
              &ldquo;We believe knowledge is the first step toward lasting
              change. Through education, advocacy, and meaningful connection, we
              empower families and communities to become self-sufficient and
              resilient.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Service commitment line */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-brown-mid font-[family-name:var(--font-playfair)] italic">
            At JJ Family Foundation, service is not simply an initiative. It is a
            family commitment. Together, we seek to create impact that is
            sustainable, measurable, and generational.
          </p>
        </div>
      </section>

      {/* Gardner Family */}
      <section className="bg-cream-light py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="THE FAMILY" />
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-mid font-[family-name:var(--font-playfair)] mt-4">
              The Gardner Family
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {familyMembers.map((member) => (
              <div key={member.name} className="text-center">
                <ImagePlaceholder className="mb-4 aspect-square" />
                <h3 className="text-lg font-semibold text-brown-dark font-[family-name:var(--font-playfair)]">
                  {member.name}
                </h3>
                <p className="text-sm text-brown-mid font-[family-name:var(--font-lato)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="bg-brown-dark py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          {["Education", "Advocacy", "Meaningful Connection"].map((value) => (
            <span
              key={value}
              className="text-cream-light text-lg font-semibold font-[family-name:var(--font-lato)] border border-cream-light/30 rounded-full px-8 py-3"
            >
              {value}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
