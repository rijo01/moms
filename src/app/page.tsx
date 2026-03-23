import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Momsräknare — Räkna ut moms enkelt | momsraknare.se",
  description:
    "Gratis momsräknare för svenska företagare. Räkna ut moms med 25%, 12% eller 6%. Lägg till eller ta bort moms snabbt och enkelt.",
};

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Momsräknare — Räkna ut moms
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Räkna ut moms snabbt och enkelt. Välj momssats (25&nbsp;%, 12&nbsp;%
          eller 6&nbsp;%) och se resultatet direkt. Perfekt för fakturor,
          bokföring och deklaration.
        </p>
      </section>

      <Calculator />

      <section className="prose prose-gray max-w-none space-y-4">
        <h2 className="text-2xl font-semibold">Så fungerar moms i Sverige</h2>
        <p>
          Moms (mervärdesskatt) är en skatt som läggs på varor och tjänster i
          Sverige. Det finns tre momssatser:
        </p>
        <ul>
          <li>
            <strong>25&nbsp;%</strong> — Standardmoms som gäller för de flesta
            varor och tjänster.
          </li>
          <li>
            <strong>12&nbsp;%</strong> — Reducerad moms för livsmedel,
            restaurang- och cateringtjänster, och hotell.
          </li>
          <li>
            <strong>6&nbsp;%</strong> — Reducerad moms för böcker, tidningar,
            kollektivtrafik, kultur- och idrottsevenemang.
          </li>
        </ul>
        <p>
          Som företagare behöver du veta hur mycket moms du ska lägga till på
          dina priser (exklusive moms) eller hur mycket moms som ingår i ett
          pris (inklusive moms). Vår momsräknare gör det enkelt att räkna ut
          båda.
        </p>
      </section>

      <LeadForm />

      <FAQ />
    </div>
  );
}
