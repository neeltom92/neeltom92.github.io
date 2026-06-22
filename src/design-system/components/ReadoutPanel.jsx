import React from "react";
import { StatusDot } from "./StatusDot.jsx";

/**
 * ReadoutPanel — the operator console panel. A gradient-filled, rounded module
 * with a labelled header (static lime dot) over a list of key/value rows. Used
 * for the hero "service summary" and the contact "reach me" list.
 *
 * Pass `rows` as [{ k, v, ok }] or compose <PanelRow> children directly.
 */
export function ReadoutPanel({ title, rows, children, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--bg-elev), var(--bg-sunk))",
        fontFamily: "var(--mono)",
        ...(rest.style || {}),
      }}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.8rem 1.1rem",
            borderBottom: "1px solid var(--line)",
            background: "rgba(255,255,255,0.02)",
            fontSize: "var(--fs-mono-xs)",
            letterSpacing: "var(--ls-label)",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          <StatusDot pulse={false} size={8} />
          {title}
        </div>
      )}
      {rows
        ? rows.map((r, i) => <PanelRow key={i} k={r.k} v={r.v} ok={r.ok} last={i === rows.length - 1} />)
        : children}
    </div>
  );
}

/** A single key/value row inside a ReadoutPanel. `ok` paints the value lime. */
export function PanelRow({ k, v, ok = false, last = false }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        alignItems: "center",
        padding: "0.7rem 1.1rem",
        fontSize: "var(--fs-mono)",
        borderBottom: last ? "none" : "1px solid var(--line)",
      }}
    >
      <span style={{ color: "var(--muted)" }}>{k}</span>
      <span
        style={{
          color: ok ? "var(--accent-ink)" : "var(--ink)",
          textAlign: "right",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
        }}
      >
        {ok && (
          <span
            aria-hidden="true"
            style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", boxShadow: "var(--shadow-dot)" }}
          />
        )}
        {v}
      </span>
    </div>
  );
}
