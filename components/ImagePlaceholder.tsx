export default function ImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-cream rounded-xl flex items-center justify-center aspect-video ${className}`}
    >
      <span className="text-terracotta text-sm font-semibold uppercase tracking-widest font-[family-name:var(--font-lato)]">
        Photo Coming Soon
      </span>
    </div>
  );
}
