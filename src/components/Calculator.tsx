"use client";

import { useState } from "react";

const VAT_RATES = [25, 12, 6] as const;
type Mode = "add" | "remove";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState<(typeof VAT_RATES)[number]>(25);
  const [mode, setMode] = useState<Mode>("add");

  const num = parseFloat(amount.replace(",", ".")) || 0;

  const vatAmount =
    mode === "add" ? num * (rate / 100) : num - num / (1 + rate / 100);
  const totalInclVat = mode === "add" ? num + num * (rate / 100) : num;
  const totalExclVat = mode === "add" ? num : num / (1 + rate / 100);

  const fmt = (n: number) =>
    n.toLocaleString("sv-SE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Comparison table for all rates
  const comparisonRows = VAT_RATES.map((r) => {
    const vat = mode === "add" ? num * (r / 100) : num - num / (1 + r / 100);
    const incl = mode === "add" ? num + num * (r / 100) : num;
    const excl = mode === "add" ? num : num / (1 + r / 100);
    return { rate: r, vat, incl, excl };
  });

  return (
    <section
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "32px",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Mode toggle */}
      <div
        style={{
          display: "flex",
          background: "var(--bg)",
          borderRadius: "var(--radius-pill)",
          padding: "4px",
          marginBottom: "24px",
        }}
      >
        {(["add", "remove"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="hover-lift"
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: "var(--radius-pill)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "14px",
              transition: "all 0.25s ease",
              background: mode === m ? "var(--bg-card)" : "transparent",
              color: mode === m ? "var(--accent)" : "var(--text-muted)",
              boxShadow:
                mode === m ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {m === "add" ? "Lägg till moms" : "Ta bort moms"}
          </button>
        ))}
      </div>

      {/* Amount input */}
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="amount"
          style={{
            display: "block",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text-muted)",
            marginBottom: "6px",
          }}
        >
          {mode === "add"
            ? "Belopp exklusive moms (kr)"
            : "Belopp inklusive moms (kr)"}
        </label>
        <input
          id="amount"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 16px",
            fontSize: "22px",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            border: "2px solid var(--border)",
            borderRadius: "var(--radius)",
            outline: "none",
            transition: "border-color var(--transition)",
            background: "var(--bg)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border)")
          }
        />
      </div>

      {/* Rate pills */}
      <fieldset style={{ border: "none", marginBottom: "24px" }}>
        <legend
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text-muted)",
            marginBottom: "8px",
          }}
        >
          Momssats
        </legend>
        <div style={{ display: "flex", gap: "8px" }}>
          {VAT_RATES.map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className="hover-lift"
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: "var(--radius-pill)",
                border: "2px solid",
                borderColor:
                  rate === r ? "var(--accent)" : "var(--border)",
                background:
                  rate === r ? "var(--accent)" : "var(--bg-card)",
                color: rate === r ? "#fff" : "var(--text)",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {r}&nbsp;%
            </button>
          ))}
        </div>
      </fieldset>

      {/* Result box */}
      {num > 0 && (
        <div
          className="fade-in-up"
          style={{
            border: "2px solid var(--border-accent)",
            borderRadius: "var(--radius)",
            padding: "24px",
            background: "var(--accent-light)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Belopp exkl. moms
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              {fmt(totalExclVat)} kr
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Moms ({rate}&nbsp;%)
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              {fmt(vatAmount)} kr
            </span>
          </div>

          {/* Dashed divider */}
          <div
            style={{
              borderTop: "2px dashed var(--accent)",
              opacity: 0.3,
              margin: "12px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Belopp inkl. moms
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "24px",
                color: "var(--accent)",
              }}
            >
              {fmt(totalInclVat)} kr
            </span>
          </div>
        </div>
      )}

      {/* Comparison table */}
      {num > 0 && (
        <div className="fade-in-up" style={{ marginTop: "20px" }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text-muted)",
              marginBottom: "8px",
            }}
          >
            Jämför alla momssatser
          </div>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "13px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "var(--bg)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500 }}>
                    Sats
                  </th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 500 }}>
                    Exkl. moms
                  </th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 500 }}>
                    Moms
                  </th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 500 }}>
                    Inkl. moms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.rate}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background:
                        row.rate === rate ? "var(--accent-light)" : "var(--bg-card)",
                      fontWeight: row.rate === rate ? 500 : 400,
                    }}
                  >
                    <td style={{ padding: "10px 14px" }}>{row.rate}&nbsp;%</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>
                      {fmt(row.excl)} kr
                    </td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>
                      {fmt(row.vat)} kr
                    </td>
                    <td
                      style={{
                        padding: "10px 14px",
                        textAlign: "right",
                        fontWeight: 600,
                      }}
                    >
                      {fmt(row.incl)} kr
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
