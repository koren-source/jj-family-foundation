import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="bg-brown-dark px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-cream-light font-display font-light mb-4">
          Ready to Make a Generational Difference?
        </h2>
        <p className="text-cream-light/80 font-light font-body mb-8">
          Partner with us or support the work we&apos;re doing in communities around the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="border-2 border-cream-light text-cream-light rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:bg-cream-light hover:text-brown-dark font-body"
          >
            Partner With Us
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B07A50] text-white rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:bg-[#9A6A42] font-body"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
