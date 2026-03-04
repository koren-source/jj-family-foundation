import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="bg-brown-dark py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cream-light font-[family-name:var(--font-playfair)] mb-4">
          Ready to Make a Generational Difference?
        </h2>
        <p className="text-cream-light/80 text-lg mb-8 font-[family-name:var(--font-lato)]">
          Partner with us or support the work we&apos;re doing in communities around the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="border-2 border-cream-light text-cream-light rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-cream-light hover:text-brown-dark font-[family-name:var(--font-lato)]"
          >
            Partner With Us
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-white rounded-lg px-8 py-3 font-semibold transition-colors hover:bg-[#B07D55] font-[family-name:var(--font-lato)]"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
