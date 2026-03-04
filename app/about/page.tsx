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
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 max-w-[520px]">
            <p className="text-[#3D2515] text-base font-light font-body leading-[1.8] mb-[1.4em]">
              JJ Family Foundation was founded by the Gardner family with a
              shared commitment to building generational self sufficiency. Led by
              Jeff and Janeen Gardner and their four daughters, Ellie, Addison,
              Paisley, and Jules, the foundation reflects their belief that
              strong families are the foundation of thriving communities.
            </p>
            <p className="text-[#3D2515] text-base font-light font-body leading-[1.8] mb-[1.4em]">
              As a family centered organization, our mission is rooted in
              education, advocacy, and meaningful connection. We believe lasting
              change is achieved by strengthening what already works. By
              supporting trusted organizations, empowering local leadership, and
              investing in sustainable initiatives, we help communities build
              resilience that extends far beyond a single generation.
            </p>
            <p className="text-[#3D2515] text-base font-light font-body leading-[1.8]">
              Our work focuses on financial literacy, education access,
              entrepreneurship, family stability, addiction recovery, and
              community leadership development. Through both local and
              international outreach, we remain committed to equipping families
              with the knowledge, opportunity, and support needed to become self
              sufficient and resilient.
            </p>
          </div>
          <div className="md:w-1/2">
            <ImagePlaceholder src="https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80" alt="The Gardner family" />
          </div>
        </div>
      </section>

      {/* Mission Blockquote */}
      <section className="bg-cream px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="text-[26px] text-brown-mid font-display italic font-light leading-[1.5]">
              &ldquo;We believe knowledge is the first step toward lasting
              change. Through education, advocacy, and meaningful connection, we
              empower families and communities to become self-sufficient and
              resilient.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Service commitment line */}
      <section className="px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-2xl text-brown-mid font-display italic font-light leading-[1.5]">
            At JJ Family Foundation, service is not simply an initiative. It is a
            family commitment. Together, we seek to create impact that is
            sustainable, measurable, and generational.
          </p>
        </div>
      </section>

      {/* Gardner Family */}
      <section className="bg-cream-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="THE FAMILY" />
            <h2 className="text-brown-mid font-display font-light mt-4">
              The Gardner Family
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {familyMembers.map((member) => (
              <div key={member.name} className="text-center rounded-lg p-3 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg cursor-default">
                <ImagePlaceholder src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Jeff Gardner" className="mb-4 aspect-[3/4]" />
                <h3 className="text-lg font-normal text-brown-dark font-display">
                  {member.name}
                </h3>
                <p className="text-xs font-light text-brown-mid font-body uppercase tracking-[0.1em]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="bg-brown-dark !py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          {["Education", "Advocacy", "Meaningful Connection"].map((value) => (
            <span
              key={value}
              className="text-cream-light text-[13px] font-normal font-body border border-cream-light/30 rounded-full px-8 py-3"
            >
              {value}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
