export default function ImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-cream rounded-lg flex items-center justify-center aspect-video ${className}`}
    >
      <span className="text-terracotta text-xs font-medium uppercase tracking-widest font-body">
        Photo Coming Soon
      </span>
    </div>
  );
}
