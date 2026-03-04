"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Full name is required.";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-2xl text-brown-mid font-display italic">
          Thank you! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[13px] font-normal tracking-[0.02em] text-text-dark mb-1 font-body">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          disabled={status === "loading"}
          className="w-full rounded-md border border-divider bg-white px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-terracotta disabled:opacity-50"
        />
        {errors.name && <p className="text-terracotta text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-[13px] font-normal tracking-[0.02em] text-text-dark mb-1 font-body">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled={status === "loading"}
          className="w-full rounded-md border border-divider bg-white px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-terracotta disabled:opacity-50"
        />
        {errors.email && <p className="text-terracotta text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="organization" className="block text-[13px] font-normal tracking-[0.02em] text-text-dark mb-1 font-body">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          disabled={status === "loading"}
          className="w-full rounded-md border border-divider bg-white px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-terracotta disabled:opacity-50"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-normal tracking-[0.02em] text-text-dark mb-1 font-body">
          How would you like to partner?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={status === "loading"}
          className="w-full rounded-md border border-divider bg-white px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-terracotta disabled:opacity-50 min-h-[120px]"
        />
      </div>
      {status === "error" && (
        <p className="text-terracotta text-sm">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-[#B07A50] text-white rounded px-8 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:bg-[#9A6A42] disabled:opacity-50 font-body"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
