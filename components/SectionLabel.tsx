"use client";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta font-body">
      {text}
    </span>
  );
}
