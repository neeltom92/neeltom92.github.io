import React from "react";

/**
 * Eyebrow — the signature section kicker. Wide-tracked uppercase JetBrains Mono
 * in dim lime, preceded by a short lime rule. Sits above every section title.
 */
export function Eyebrow({ children, ...rest }) {
  return (
    <p
      {...rest}
      style={{
        fontFamily: "var(--mono)",
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--accent-deep)",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        margin: "0 0 1.4rem",
        ...(rest.style || {}),
      }}
    >
      <span
        aria-hidden="true"
        style={{ width: "1.8rem", height: 1, background: "var(--accent)", opacity: 0.6, flex: "none" }}
      />
      {children}
    </p>
  );
}
