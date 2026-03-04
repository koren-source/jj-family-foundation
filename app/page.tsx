import Link from "next/link";
import {
  BookOpen,
  Users,
  Layers,
  DollarSign,
  GraduationCap,
  Heart,
  LifeBuoy,
  Shield,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTAStrip from "@/components/CTAStrip";

const approachCards = [
  {
    icon: BookOpen,
    title: "Education",
    body: "We believe informed families are empowered families. By increasing awareness and understanding around critical issues, we equip communities with the knowledge needed to make confident, forward thinking decisions.",
  },
  {
    icon: Users,
    title: "Connection",
    body: "Strong communities are built through strong relationships. We connect individuals, organizations, and trusted resources so families do not have to navigate challenges alone.",
  },
  {
    icon: Layers,
    title: "Strengthening What Works",
    body: "We do not seek to replace existing solutions. We support and expand proven programs and local leadership, helping bridge gaps and increase long term stability.",
  },
];

const focusAreaPreviews = [
  { icon: DollarSign, title: "Financial Literacy & Economic Self Sufficiency" },
  { icon: GraduationCap, title: "Education & Entrepreneurship" },
  { icon: Heart, title: "Family Stability & Faith-Based Support" },
  { icon: LifeBuoy, title: "Addiction Recovery & Restoration" },
  { icon: Shield, title: "Community Leadership Development" },
];

const countries = ["Brazil", "India", "Uganda"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-brown-dark font-[family-name:var(--font-playfair)] mb-4">
              Building Generational Self Sufficiency.
            </h1>
            <p className="text-xl md:text-2xl text-brown-mid font-[family-name:var(--font-playfair)] italic mb-6">
              Stronger families create stronger futures.
            </p>
            <p className="text-text-dark text-lg max-w-2xl mb-8 font-[family-name:var(--font-lato)]">
              Through education, advocacy, and meaningful community connection,
              we help families build stability, resilience, and opportunity that
              extends beyond a single generation. We do not reinvent solutions.
              We strengthen what already works and bring people together to
              create lasting, sustainable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/focus-areas"
                className="bg-terracotta text-white rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
              >
                Learn More About Our Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-terracotta text-terracotta rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-terracotta hover:text-white font-[family-name:var(--font-lato)]"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="md:w-2/5">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="OUR APPROACH" />
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-mid font-[family-name:var(--font-playfair)] mt-4 mb-6">
              Lasting Change Starts With Strengthening What Works
            </h2>
            <p className="text-text-dark text-lg max-w-3xl mx-auto font-[family-name:var(--font-lato)]">
              Lasting change does not come from starting over. It comes from
              strengthening what already works. At JJ Family Foundation, we focus
              on education, connection, and collaboration to help families and
              communities build sustainable self sufficiency that endures for
              generations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta p-6"
              >
                <card.icon className="w-8 h-8 text-terracotta mb-4" />
                <h3 className="text-xl font-semibold text-brown-dark font-[family-name:var(--font-playfair)] mb-3">
                  {card.title}
                </h3>
                <p className="text-text-dark font-[family-name:var(--font-lato)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-brown-mid font-[family-name:var(--font-playfair)] italic max-w-xl mx-auto">
            When knowledge and connection come together, generational change
            becomes possible.
          </p>
        </div>
      </section>

      {/* Focus Areas Preview */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="OUR FOCUS AREAS" />
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-mid font-[family-name:var(--font-playfair)] mt-4">
              Where We Invest Our Energy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreaPreviews.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta p-6"
              >
                <area.icon className="w-8 h-8 text-terracotta mb-4" />
                <h3 className="text-lg font-semibold text-brown-dark font-[family-name:var(--font-playfair)] mb-3">
                  {area.title}
                </h3>
                <Link
                  href="/focus-areas"
                  className="text-terracotta font-semibold text-sm hover:underline font-[family-name:var(--font-lato)]"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/focus-areas"
              className="bg-terracotta text-white rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
            >
              See All Focus Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Global Outreach Teaser */}
      <section className="bg-cream-light py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="GLOBAL OUTREACH" />
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-mid font-[family-name:var(--font-playfair)] mt-4">
              Building Self Sufficiency Across Borders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {countries.map((country) => (
              <div key={country} className="text-center">
                <ImagePlaceholder className="mb-4" />
                <h3 className="text-xl font-semibold text-brown-dark font-[family-name:var(--font-playfair)]">
                  {country}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/global-outreach"
              className="bg-terracotta text-white rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
            >
              View Our Global Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <CTAStrip />
    </>
  );
}
