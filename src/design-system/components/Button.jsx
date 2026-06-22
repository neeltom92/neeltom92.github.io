import React from "react";

/**
 * Button — terminal control. Mono label. Default is a hairline-outline ghost on
 * the dark canvas; `primary` is the electric-lime phosphor fill. Hover lifts 2px
 * and washes lime (primary glows).
 */
export function Button({
  children,
  variant = "default",
  as = "button",
  href,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "var(--mono)",
    fontSize: "var(--fs-mono)",
    letterSpacing: "0.01em",
    padding: "0.72rem 1.2rem",
    borderRadius: "var(--r-md)",
    border: "1px solid var(--line-2)",
    background: "transparent",
    color: "var(--ink)",
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition:
      "border-color var(--t-fast), color var(--t-fast), background var(--t-fast), transform var(--t-fast), box-shadow var(--t-fast)",
  };
  const primary = {
    background: "var(--accent)",
    color: "#0a0e0d",
    borderColor: "var(--accent)",
    fontWeight: 700,
  };
  const isPrimary = variant === "primary";
  const Tag = as || (href ? "a" : "button");

  return (
    <Tag
      {...rest}
      href={href}
      style={{ ...base, ...(isPrimary ? primary : null), ...(rest.style || {}) }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "var(--lift-sm)";
        if (isPrimary) {
          e.currentTarget.style.background = "var(--accent-ink)";
          e.currentTarget.style.boxShadow = "var(--shadow-cta)";
        } else {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent-ink)";
          e.currentTarget.style.background = "var(--accent-dim)";
        }
        rest.onMouseEnter && rest.onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        if (isPrimary) {
          e.currentTarget.style.background = "var(--accent)";
        } else {
          e.currentTarget.style.borderColor = "var(--line-2)";
          e.currentTarget.style.color = "var(--ink)";
          e.currentTarget.style.background = "transparent";
        }
        rest.onMouseLeave && rest.onMouseLeave(e);
      }}
    >
      {children}
    </Tag>
  );
}
