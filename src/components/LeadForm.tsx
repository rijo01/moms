"use client";

import { useState } from "react";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "–", email, message: "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      style={{
        marginTop: "64px",
        background: "var(--accent)",
        borderRadius: "var(--radius)",
        padding: "40px 32px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "26px",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#fff",
          marginBottom: "8px",
        }}
      >
        Trött på bokföringen?
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "14px",
          marginBottom: "24px",
          maxWidth: "400px",
          margin: "0 auto 24px",
          lineHeight: 1.6,
        }}
      >
        Lämna din e-post så skickar vi tips om smarta verktyg för företagare.
      </p>

      {status === "sent" ? (
        <p
          style={{
            color: "var(--highlight)",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Tack! Vi hör av oss.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            maxWidth: "420px",
            margin: "0 auto",
            gap: "8px",
          }}
        >
          <input
            type="email"
            required
            placeholder="din@email.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "var(--radius-pill)",
              border: "2px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "var(--font-body)",
              outline: "none",
              transition: "border-color var(--transition)",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--highlight)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
            }
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="hover-lift"
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-pill)",
              border: "none",
              background: "var(--highlight)",
              color: "#1a1a1a",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all var(--transition)",
              opacity: status === "sending" ? 0.6 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {status === "sending" ? "Skickar..." : "Skicka"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p
          style={{
            color: "var(--highlight)",
            fontSize: "13px",
            marginTop: "12px",
          }}
        >
          Något gick fel. Försök igen.
        </p>
      )}
    </section>
  );
}
