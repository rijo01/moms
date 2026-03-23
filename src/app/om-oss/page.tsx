import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — momsraknare.se",
  description:
    "momsraknare.se erbjuder en gratis momsräknare för svenska företagare.",
};

export default function OmOss() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 prose prose-gray">
      <h1>Om momsraknare.se</h1>
      <p>
        momsraknare.se är en gratis tjänst som hjälper svenska företagare att
        snabbt och enkelt räkna ut moms. Oavsett om du behöver lägga till moms
        på ett pris exklusive moms eller ta bort moms från ett pris inklusive
        moms — vår räknare gör det på en sekund.
      </p>
      <p>
        Vi stödjer alla tre svenska momssatser: 25&nbsp;%, 12&nbsp;% och
        6&nbsp;%. Verktyget är helt gratis och kräver ingen registrering.
      </p>
      <p>
        Har du frågor eller förslag? Kontakta oss via formuläret på{" "}
        <a href="/">startsidan</a>.
      </p>
    </div>
  );
}
