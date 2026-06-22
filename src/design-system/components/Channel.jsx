import React from "react";

/**
 * Channel — a contact row in the "reach me" console. A 3-column grid: mono key,
 * value, and a ↗ go-arrow. On hover the row washes faint, indents, and the value
 * + arrow turn lime. Stack inside a ReadoutPanel.
 */
export function Channel({ label, value, href, external = false, last = false, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const extra = external ? { target: "_blank", rel: "noopener" } : {};

  return (
    <a
      {...rest}
      href={href}
      {...extra}
      onMouseEnter={(e) => { setHover(true); rest.onMouseEnter && rest.onMouseEnter(e); }}
      onMouseLeave={(e) => { setHover(false); rest.onMouseLeave && rest.onMouseLeave(e); }}
      style={{
        display: "grid",
        gridTemplateColumns: "6.5rem 1fr auto",
        alignItems: "center",
        gap: "0.8rem",
        padding: "0.95rem 1.1rem",
        paddingLeft: hover ? "1.4rem" : "1.1rem",
        borderBottom: last ? "none" : "1px solid var(--line)",
        background: hover ? "rgba(255,255,255,0.02)" : "transparent",
        fontFamily: "var(--mono)",
        fontSize: "var(--fs-mono)",
        textDecoration: "none",
        transition: "background var(--t-fast), padding-left var(--t-fast)",
        ...(rest.style || {}),
      }}
    >
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span style={{ color: hover ? "var(--accent-ink)" : "var(--ink)", overflowWrap: "anywhere" }}>{value}</span>
      <span aria-hidden="true" style={{ color: hover ? "var(--accent-ink)" : "var(--faint)" }}>↗</span>
    </a>
  );
}
