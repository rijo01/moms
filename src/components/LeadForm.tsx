"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-2">Kontakta oss</h2>
      <p className="text-gray-600 text-sm mb-4">
        Har du frågor om moms eller vill du komma i kontakt? Fyll i formuläret
        så hör vi av oss.
      </p>

      {status === "sent" ? (
        <p className="text-green-600 font-medium">Tack! Vi hör av oss snart.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
              Namn
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
              E-post
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1">
              Meddelande (valfritt)
            </label>
            <textarea
              id="lead-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === "sending" ? "Skickar..." : "Skicka"}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-sm">Något gick fel. Försök igen.</p>
          )}
        </form>
      )}
    </section>
  );
}
