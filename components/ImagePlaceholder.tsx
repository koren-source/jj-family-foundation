import Image from "next/image";

export default function ImagePlaceholder({
  className = "",
  src,
  alt = "JJ Family Foundation",
}: {
  className?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <div className={`relative rounded-lg overflow-hidden aspect-video ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

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
