import React from "react";
import { Chip } from "./Chip.jsx";

/**
 * ProjectCard — a "component" on the work grid. Numbered index, a mono tag with
 * a status LED (lime by default, amber for open-source), oversized title, body,
 * tech-chip stack, and a corner link arrow. On hover it lifts, a lime bar wipes
 * down the left edge, and the arrow slides.
 */
export function ProjectCard({ index, tag, oss = false, title, desc, stack = [], href, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const ledColor = oss ? "var(--amber)" : "var(--accent)";

  return (
    <article
      {...rest}
      onMouseEnter={(e) => { setHover(true); rest.onMouseEnter && rest.onMouseEnter(e); }}
      onMouseLeave={(e) => { setHover(false); rest.onMouseLeave && rest.onMouseLeave(e); }}
      style={{
        position: "relative",
        border: `1px solid ${hover ? "var(--line-2)" : "var(--line)"}`,
        borderRadius: "var(--r-xl)",
        padding: "1.5rem 1.6rem 1.4rem",
        background: "var(--bg-elev)",
        overflow: "hidden",
        transform: hover ? "var(--lift)" : "none",
        boxShadow: hover ? "var(--shadow-card-hover)" : "none",
        transition: "border-color var(--t-med), transform var(--t-med), box-shadow var(--t-med)",
        ...(rest.style || {}),
      }}
    >
      {/* left lime wipe */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, top: 0, height: "100%", width: 3,
          background: "var(--accent)", transformOrigin: "top",
          transform: hover ? "scaleY(1)" : "scaleY(0)", transition: "transform 0.28s var(--ease)",
        }}
      />
      {index != null && (
        <span style={{ position: "absolute", top: "1.4rem", right: "1.4rem", fontFamily: "var(--mono)", fontSize: "var(--fs-mono-xs)", color: "var(--faint)" }}>
          {String(index).padStart(2, "0")}
        </span>
      )}
      {tag && (
        <span style={{ fontFamily: "var(--mono)", fontSize: "var(--fs-mono-xs)", letterSpacing: "0.06em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.45rem", color: oss ? "var(--amber)" : "var(--accent-ink)", marginBottom: "1rem" }}>
          <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: ledColor }} />
          {tag}
        </span>
      )}
      <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "var(--fs-h3)", color: "var(--ink)", margin: "0 0 0.55rem", lineHeight: 1.05 }}>
        {title}
      </h3>
      {desc && (
        <p style={{ fontFamily: "var(--display)", color: "var(--ink-2)", fontSize: "var(--fs-sm)", lineHeight: 1.55, margin: "0 0 1.15rem" }}>
          {desc}
        </p>
      )}
      {stack.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {stack.map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
      )}
      {href && (
        <a
          href={href} target="_blank" rel="noopener" aria-label={`${title} ↗`}
          style={{ position: "absolute", bottom: "1.4rem", right: "1.5rem", fontFamily: "var(--mono)", fontSize: "1rem", color: hover ? "var(--accent-ink)" : "var(--muted)", transform: hover ? "translate(2px,-2px)" : "none", transition: "color var(--t-fast), transform var(--t-fast)" }}
        >
          ↗
        </a>
      )}
    </article>
  );
}
