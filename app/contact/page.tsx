import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with the JJ Family Foundation. Whether you represent an organization, a church, or simply want to get involved — we want to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="GET IN TOUCH"
        headline="Partner With Us"
        subtitle="Whether you represent an organization, a church, or simply want to get involved — we want to hear from you."
      />

      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="md:w-3/5">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="md:w-2/5 space-y-8">
            <div>
              <h3 className="text-[22px] font-normal text-brown-dark font-display mb-2">
                JJ Family Foundation
              </h3>
              <p className="text-base text-[#8B5E3C] font-display italic font-light mb-4">
                Building Generational Self Sufficiency.
              </p>
              <p className="text-[#3D2515] text-[15px] font-light font-body leading-[1.75]">
                We believe in the power of partnership. Together, we can
                strengthen families, support communities, and create lasting
                generational impact through education, advocacy, and meaningful
                connection.
              </p>
            </div>

            <hr className="border-divider" />

            {/* Donate card */}
            <div className="bg-brown-dark rounded-[10px] p-8 text-center">
              <h3 className="text-xl font-normal text-cream-light font-display mb-3">
                Support the Work
              </h3>
              <p className="text-cream-light/80 text-sm font-light mb-6 font-body">
                Your support helps strengthen families and communities around
                the world.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-cream-light text-cream-light rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-all duration-200 hover:bg-cream-light hover:text-brown-dark font-body"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
