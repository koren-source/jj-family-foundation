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
    <section className="bg-cream-light px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text={eyebrow} />
        <h1 className="text-brown-dark font-display mt-4 mb-4">
          {headline}
        </h1>
        {subtitle && (
          <p className="text-base font-light text-brown-mid font-body max-w-[580px] mx-auto leading-[1.8]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
