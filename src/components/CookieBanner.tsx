import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const STORAGE_KEY = "navigare_cookie_consent";

export type ConsentChoice = "accepted" | "rejected" | null;

export function getConsent(): ConsentChoice {
  try {
    return (localStorage.getItem(STORAGE_KEY) as ConsentChoice) ?? null;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  function save(choice: "accepted" | "rejected") {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
        boxShadow: "0 -4px 24px rgba(0,0,0,.08)",
        padding: "20px 24px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
        <p style={{ flex: "1 1 320px", fontSize: 13, lineHeight: 1.6, margin: 0, color: "var(--foreground)" }}>
          Questo sito utilizza solo cookie tecnici necessari al funzionamento. Non raccoglie dati di profilazione né cede informazioni a terzi.{" "}
          <Link to="/cookie" style={{ textDecoration: "underline", color: "inherit" }}>
            Cookie policy
          </Link>{" "}
          ·{" "}
          <Link to="/privacy" style={{ textDecoration: "underline", color: "inherit" }}>
            Privacy
          </Link>
        </p>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <button
            onClick={() => save("rejected")}
            style={{
              padding: "8px 18px",
              fontSize: 13,
              borderRadius: 6,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--foreground)",
              cursor: "pointer",
            }}
          >
            Solo necessari
          </button>
          <button
            onClick={() => save("accepted")}
            style={{
              padding: "8px 18px",
              fontSize: 13,
              borderRadius: 6,
              border: "none",
              background: "var(--foreground)",
              color: "var(--background)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
