"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Vad är moms?",
    a: "Moms (mervärdesskatt) är en skatt som läggs på varor och tjänster. Företag tar ut moms av sina kunder och redovisar den till Skatteverket.",
  },
  {
    q: "Vilka momssatser finns i Sverige?",
    a: "Det finns tre momssatser: 25 % (standard), 12 % (livsmedel, hotell, restaurang) och 6 % (böcker, tidningar, kollektivtrafik, kultur).",
  },
  {
    q: "Hur räknar man ut moms på ett pris exklusive moms?",
    a: "Multiplicera beloppet med momssatsen. Exempel: 1 000 kr × 0,25 = 250 kr i moms. Totalt inklusive moms blir 1 250 kr.",
  },
  {
    q: "Hur räknar man ut moms på ett pris inklusive moms?",
    a: "Dividera beloppet med (1 + momssatsen). Exempel: 1 250 kr / 1,25 = 1 000 kr exklusive moms. Momsen är 250 kr.",
  },
  {
    q: "Måste alla företag ta ut moms?",
    a: "Nej, företag med en omsättning under 80 000 kr per år kan ansöka om momsbefrielse. Vissa tjänster som sjukvård och utbildning är också momsbefriade.",
  },
  {
    q: "Är momsräknaren gratis?",
    a: "Ja, momsraknare.se är helt gratis att använda. Ingen registrering krävs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-semibold mb-4">Vanliga frågor om moms</h2>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-medium hover:bg-gray-50 transition"
            >
              {f.q}
              <span className="ml-2 text-gray-400 text-xl leading-none">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
