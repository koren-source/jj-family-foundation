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

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="md:w-3/5">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="md:w-2/5 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brown-dark font-[family-name:var(--font-playfair)] mb-2">
                JJ Family Foundation
              </h3>
              <p className="text-brown-mid font-[family-name:var(--font-playfair)] italic mb-4">
                Building Generational Self Sufficiency.
              </p>
              <p className="text-text-dark font-[family-name:var(--font-lato)]">
                We believe in the power of partnership. Together, we can
                strengthen families, support communities, and create lasting
                generational impact through education, advocacy, and meaningful
                connection.
              </p>
            </div>

            <hr className="border-divider" />

            {/* Donate card */}
            <div className="bg-brown-dark rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-cream-light font-[family-name:var(--font-playfair)] mb-3">
                Support the Work
              </h3>
              <p className="text-cream-light/80 mb-6 font-[family-name:var(--font-lato)]">
                Your support helps strengthen families and communities around
                the world.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-cream-light text-cream-light rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-cream-light hover:text-brown-dark font-[family-name:var(--font-lato)]"
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
