import SectionLabel from "./SectionLabel";

export default function HeroSection({
  eyebrow,
  headline,
  subtitle,
  children,
}: {
  eyebrow: string;
  headline: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-cream-light py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text={eyebrow} />
        <h1 className="text-4xl md:text-6xl font-bold text-brown-dark font-[family-name:var(--font-playfair)] mt-4 mb-4">
          {headline}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-brown-mid font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
