import React from "react";

/**
 * StatusDot — the brand's heartbeat. A small electric-lime dot with a phosphor
 * glow that pulses ("all systems operational"). `amber` recolours it for the
 * open-source / secondary signal; `pulse={false}` stills it (used in panel heads).
 */
export function StatusDot({ tone = "accent", size = 8, pulse = true, label, ...rest }) {
  const color = tone === "amber" ? "var(--amber)" : "var(--accent)";
  const glow =
    tone === "amber"
      ? "0 0 12px 1px rgba(255,180,84,0.6)"
      : "var(--shadow-dot)";

  const dot = (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        boxShadow: glow,
        flex: "none",
        display: "inline-block",
        animation: pulse ? "cwPulse 2.6s infinite" : "none",
      }}
    />
  );

  if (!label) {
    return (
      <>
        <style>{kf}</style>
        {React.cloneElement(dot, rest)}
      </>
    );
  }
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "var(--mono)",
        fontSize: "var(--fs-mono-sm)",
        color: "var(--accent-ink)",
        ...(rest.style || {}),
      }}
    >
      <style>{kf}</style>
      {dot}
      {label}
    </span>
  );
}

const kf = `@keyframes cwPulse {
  0% { box-shadow: 0 0 0 0 rgba(201,242,91,0.5); }
  70% { box-shadow: 0 0 0 8px rgba(201,242,91,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,242,91,0); }
}`;
