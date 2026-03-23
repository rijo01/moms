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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section style={{ marginTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "28px",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        Vanliga frågor om moms
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <div className="faq-answer">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
