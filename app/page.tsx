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
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import CTAStrip from "@/components/CTAStrip";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FOCUS_AREAS } from "@/lib/constants";

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

const focusAreaIcons = [DollarSign, GraduationCap, Heart, LifeBuoy, Shield];

const countries = [
  {
    name: "Brazil",
    description:
      "Supporting family stability and recovery programs in local communities.",
  },
  {
    name: "India",
    description:
      "Partnering with Rising Star Outreach to serve families living in leprosy colonies.",
  },
  {
    name: "Uganda",
    description:
      "Investing in child-focused development through Children\u2019s HopeChest.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light px-6 min-h-[90vh] flex items-center pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <h1 className="text-brown-dark font-display font-light mb-4 animate-fade-in-up">
                Building Generational Self Sufficiency.
              </h1>
              <p className="text-[22px] text-[#8B5E3C] font-display italic font-light mb-6 animate-fade-in-up delay-100">
                Stronger families create stronger futures.
              </p>
              <p className="text-[#3D2515] text-base font-light max-w-2xl mb-8 font-body leading-[1.8] animate-fade-in-up delay-200">
                Through education, advocacy, and meaningful community connection,
                we help families build stability, resilience, and opportunity that
                extends beyond a single generation. We do not reinvent solutions.
                We strengthen what already works and bring people together to
                create lasting, sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                <Link
                  href="/focus-areas"
                  className="bg-[#B07A50] text-white rounded px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] transition-all duration-200 hover:bg-[#9A6A42] hover:-translate-y-px font-body"
                >
                  Learn More About Our Projects
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#B07A50] text-[#B07A50] rounded px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] transition-all duration-200 hover:bg-[#B07A50] hover:text-white font-body"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/images/hero-community.png"
                  alt="Community members coming together — JJ Family Foundation"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="OUR APPROACH" />
            <h2 className="text-brown-mid font-display font-light mt-4 mb-6">
              Lasting Change Starts With Strengthening What Works
            </h2>
            <p className="text-[#3D2515] text-base font-light max-w-[620px] mx-auto font-body leading-[1.8]">
              Lasting change does not come from starting over. It comes from
              strengthening what already works. At JJ Family Foundation, we focus
              on education, connection, and collaboration to help families and
              communities build sustainable self sufficiency that endures for
              generations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {approachCards.map((card, i) => {
              const delayClass =
                i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300";
              return (
                <div
                  key={card.title}
                  className={`bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta overflow-hidden animate-fade-in-up ${delayClass}`}
                >
                  <ImagePlaceholder className="aspect-[16/9] rounded-none" />
                  <div className="p-7">
                    <card.icon className="w-8 h-8 text-terracotta mb-4" />
                    <h3 className="text-[26px] font-normal text-brown-dark font-display mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[#3D2515] text-[15px] font-light font-body leading-[1.75]">
                      {card.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pull Quote */}
          <div className="py-20 border-t border-b border-[#D4B896]">
            <div className="max-w-xl mx-auto text-center">
              <span className="block text-7xl text-terracotta font-display leading-none -mb-4">
                &ldquo;
              </span>
              <p className="text-[26px] text-brown-mid font-display italic font-light leading-[1.5]">
                When knowledge and connection come together, generational change
                becomes possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Preview */}
      <section className="bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="OUR FOCUS AREAS" />
            <h2 className="text-brown-mid font-display font-light mt-4">
              Where We Invest Our Energy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FOCUS_AREAS.map((area, i) => {
              const Icon = focusAreaIcons[i];
              return (
                <div
                  key={area.title}
                  className="bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta overflow-hidden"
                >
                  <ImagePlaceholder className="aspect-[16/9] rounded-none" />
                  <div className="p-7">
                    <Icon className="w-8 h-8 text-terracotta mb-4" />
                    <h3 className="text-[26px] font-normal text-brown-dark font-display mb-2 leading-[1.25]">
                      {area.title}
                    </h3>
                    <p className="text-[#3D2515] text-[14px] font-light font-body leading-[1.6] mb-3">
                      {area.teaser}
                    </p>
                    <Link
                      href="/focus-areas"
                      className="group inline-flex items-center gap-1 text-[#8B5E3C] font-normal text-[13px] hover:underline underline-offset-4 font-body"
                    >
                      Learn More <span className="font-display italic inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href="/focus-areas"
              className="bg-[#B07A50] text-white rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-all duration-200 hover:bg-[#9A6A42] hover:-translate-y-px font-body"
            >
              See All Focus Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Global Outreach Teaser */}
      <section className="bg-cream-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="GLOBAL OUTREACH" />
            <h2 className="text-brown-mid font-display font-light mt-4">
              Building Self Sufficiency Across Borders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <ImagePlaceholder className="aspect-video rounded-none" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-brown-dark font-display mb-2">
                    {country.name}
                  </h3>
                  <p className="text-[#3D2515] text-[14px] font-light font-body leading-[1.6]">
                    {country.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/global-outreach"
              className="bg-[#B07A50] text-white rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-all duration-200 hover:bg-[#9A6A42] hover:-translate-y-px font-body"
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
