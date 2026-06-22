import React from "react";

/**
 * Chip — a JetBrains-Mono tech tag in a recessed well. The atomic unit of every
 * stack list and skill card. `lit` gives it the lime phosphor treatment for an
 * active / featured tag.
 */
export function Chip({ children, lit = false, ...rest }) {
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--mono)",
        fontSize: "var(--fs-mono-xs)",
        letterSpacing: "0.02em",
        padding: "0.26rem 0.6rem",
        borderRadius: "var(--r-sm)",
        background: lit ? "var(--accent-dim)" : "var(--bg-sunk)",
        color: lit ? "var(--accent-ink)" : "var(--ink-2)",
        border: `1px solid ${lit ? "rgba(201,242,91,0.3)" : "var(--line)"}`,
        whiteSpace: "nowrap",
        ...(rest.style || {}),
      }}
    >
      {children}
    </span>
  );
}
