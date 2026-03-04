"use client";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.08em] text-terracotta font-[family-name:var(--font-lato)]">
      {text}
    </span>
  );
}
