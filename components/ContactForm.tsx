"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.error ?? "Something went wrong. Please try again."
        );
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErrorMessage(
        "Could not reach the server. Please check your connection and try again."
      );
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-10 text-center">
        <div className="text-gold text-4xl mb-4">✓</div>
        <h3 className="font-serif text-xl text-navy font-bold mb-2">
          Message received
        </h3>
        <p className="text-slate-body text-sm">
          Thank you. Me RWABUKUMBA Moussa will respond to your enquiry shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="name">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="company">
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
            placeholder="Company name (optional)"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="email">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
            placeholder="+250 ..."
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="message">
          How can I help you? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition resize-none"
          placeholder="Briefly describe your matter..."
        />
      </div>
      <p className="text-xs text-slate-muted leading-relaxed">
        All enquiries are treated in strict confidence. Submitting this form does not
        create an attorney-client relationship.
      </p>
      {state === "error" && errorMessage && (
        <p
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3"
        >
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="bg-navy hover:bg-navy-dark disabled:opacity-60 text-white font-semibold px-8 py-4 rounded text-sm transition-colors self-start"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
