import React from "react";
import { Chip } from "./Chip.jsx";

/**
 * SkillCard — a "monitored system" in the toolchain grid. A bordered module with
 * a mono header prefixed by a lime ▮ block, over a wrapped row of tech chips.
 */
export function SkillCard({ heading, items = [], ...rest }) {
  return (
    <div
      {...rest}
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        padding: "1.4rem 1.5rem",
        background: "var(--bg-elev)",
        ...(rest.style || {}),
      }}
    >
      <h4
        style={{
          fontFamily: "var(--mono)",
          fontSize: "var(--fs-eyebrow)",
          letterSpacing: "var(--ls-label)",
          textTransform: "uppercase",
          color: "var(--accent-deep)",
          margin: "0 0 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.55rem",
        }}
      >
        <span aria-hidden="true" style={{ color: "var(--accent)", fontSize: "0.8em" }}>▮</span>
        {heading}
      </h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {items.map((it) => <Chip key={it}>{it}</Chip>)}
      </div>
    </div>
  );
}
