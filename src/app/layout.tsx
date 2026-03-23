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
      <body>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(245, 242, 235, 0.92)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 800,
                textDecoration: "none",
                display: "flex",
                alignItems: "baseline",
                gap: "0px",
              }}
            >
              <span style={{ color: "var(--text)" }}>moms</span>
              <span style={{ color: "var(--accent)" }}>räknare</span>
              <span
                style={{
                  color: "var(--text-light)",
                  fontWeight: 400,
                  fontSize: "14px",
                  marginLeft: "4px",
                }}
              >
                .se
              </span>
            </a>
            <nav style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
              <a href="/om-oss" style={{ color: "var(--text-muted)" }}>
                Om oss
              </a>
              <a
                href="/integritetspolicy"
                style={{ color: "var(--text-muted)" }}
              >
                Integritet
              </a>
            </nav>
          </div>
        </header>

        <main style={{ flex: 1 }}>{children}</main>

        <footer
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "24px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "13px",
              color: "var(--text-light)",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span>
              &copy; {new Date().getFullYear()} momsraknare.se
            </span>
            <a
              href="/integritetspolicy"
              style={{ color: "var(--text-light)", fontSize: "13px" }}
            >
              Integritetspolicy
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
