import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy — momsraknare.se",
  description: "Läs om hur momsraknare.se hanterar dina personuppgifter.",
};

export default function Integritetspolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 prose prose-gray">
      <h1>Integritetspolicy</h1>
      <p>
        <strong>Senast uppdaterad:</strong> 2025-01-01
      </p>

      <h2>Vilka uppgifter samlar vi in?</h2>
      <p>
        Vi samlar enbart in de uppgifter du frivilligt lämnar via vårt
        kontaktformulär: namn, e-postadress och eventuellt meddelande.
      </p>

      <h2>Hur använder vi uppgifterna?</h2>
      <p>
        Uppgifterna används enbart för att besvara din förfrågan. Vi delar inte
        dina uppgifter med tredje part.
      </p>

      <h2>Cookies</h2>
      <p>
        momsraknare.se använder inga spårningscookies. Eventuella tekniska
        cookies som krävs för att webbplatsen ska fungera lagras enligt gällande
        lagstiftning.
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Du har rätt att begära tillgång till, rättelse av eller radering av dina
        personuppgifter. Kontakta oss via kontaktformuläret på startsidan.
      </p>

      <h2>Kontakt</h2>
      <p>
        Har du frågor om vår integritetspolicy? Kontakta oss via formuläret på{" "}
        <a href="/">startsidan</a>.
      </p>
    </div>
  );
}
