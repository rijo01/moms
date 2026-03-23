import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momsräknare — Räkna ut moms enkelt | momsraknare.se",
  description:
    "Gratis momsräknare för svenska företagare. Räkna ut moms med 25%, 12% eller 6%. Lägg till eller ta bort moms snabbt och enkelt.",
  metadataBase: new URL("https://momsraknare.se"),
  openGraph: {
    title: "Momsräknare — Räkna ut moms enkelt",
    description:
      "Gratis momsräknare för svenska företagare. Räkna ut moms med 25%, 12% eller 6%.",
    url: "https://momsraknare.se",
    siteName: "momsraknare.se",
    locale: "sv_SE",
    type: "website",
  },
  alternates: { canonical: "https://momsraknare.se" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-600">
              momsraknare.se
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/om-oss" className="hover:text-blue-600">
                Om oss
              </a>
              <a href="/integritetspolicy" className="hover:text-blue-600">
                Integritetspolicy
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} momsraknare.se — Gratis momsräknare
            för svenska företagare
          </div>
        </footer>
      </body>
    </html>
  );
}
