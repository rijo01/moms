import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Momsräknare — Räkna ut moms enkelt | momsraknare.se",
  description:
    "Gratis momsräknare för svenska företagare. Räkna ut moms med 25%, 12% eller 6%. Lägg till eller ta bort moms snabbt och enkelt.",
};

const rateCards = [
  {
    rate: "25%",
    label: "Standardmoms",
    desc: "De flesta varor och tjänster — elektronik, kläder, konsulttjänster, bygg med mera.",
    color: "var(--accent)",
    bg: "var(--accent-light)",
  },
  {
    rate: "12%",
    label: "Livsmedel & hotell",
    desc: "Mat i butik, restaurang- och cateringtjänster, hotellövernattningar.",
    color: "#b8860b",
    bg: "var(--highlight-light)",
  },
  {
    rate: "6%",
    label: "Kultur & transport",
    desc: "Böcker, tidningar, kollektivtrafik, konserter, bio och idrottsevenemang.",
    color: "#7c5cbf",
    bg: "#f3f0ff",
  },
];

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "56px 0 40px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "var(--highlight-light)",
            border: "1px solid var(--highlight)",
            borderRadius: "var(--radius-pill)",
            padding: "4px 14px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#8a6d00",
            marginBottom: "20px",
          }}
        >
          Gratis &middot; Uppdaterad 2025
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Räkna ut{" "}
          <span style={{ color: "var(--accent)" }}>momsen</span>
          <br />
          på två sekunder
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "460px",
            margin: "0 auto",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          Välj momssats, skriv in beloppet — klart. Stödjer 25&nbsp;%,
          12&nbsp;% och 6&nbsp;%. Perfekt för fakturor, bokföring och
          deklaration.
        </p>
      </section>

      <Calculator />

      {/* Momssatser */}
      <section style={{ marginTop: "64px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Momssatser i Sverige
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {rateCards.map((c) => (
            <div
              key={c.rate}
              className="hover-lift"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "42px",
                  fontWeight: 800,
                  color: c.color,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {c.rate}
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: c.bg,
                  borderRadius: "var(--radius-pill)",
                  padding: "2px 10px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: c.color,
                  marginBottom: "12px",
                }}
              >
                {c.label}
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Informationstext */}
      <section style={{ marginTop: "64px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Så fungerar moms i Sverige
        </h2>
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "14px",
            lineHeight: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <p>
            Moms (mervärdesskatt) är en skatt som läggs på varor och tjänster.
            Företag tar ut moms av sina kunder och redovisar den till
            Skatteverket. Som företagare behöver du veta hur mycket moms du ska
            lägga till på dina priser eller hur mycket moms som ingår i ett
            pris.
          </p>
          <p>
            Vid <strong>25&nbsp;%</strong> moms på 1&nbsp;000&nbsp;kr exkl.
            moms blir momsen 250&nbsp;kr och totalen 1&nbsp;250&nbsp;kr. Vid{" "}
            <strong>12&nbsp;%</strong> blir momsen 120&nbsp;kr och vid{" "}
            <strong>6&nbsp;%</strong> blir den 60&nbsp;kr. Vår räknare hanterar
            båda riktningarna — lägg till eller ta bort moms.
          </p>
        </div>
      </section>

      <LeadForm />

      <FAQ />
    </div>
  );
}
