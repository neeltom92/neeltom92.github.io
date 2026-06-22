import React from "react";

/**
 * TimelineItem — one entry in the "uptime history / career log". A left rule with
 * a node dot (lit lime for current roles), a mono date, a role · company line,
 * and description. Compose several inside a container; the brand reads the column
 * as a status strip where every role "shipped and stayed up".
 */
export function TimelineItem({ when, role, co, children, current = false, last = false, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        position: "relative",
        padding: last ? "0 0 0 2.2rem" : "0 0 2.2rem 2.2rem",
        borderLeft: `1px solid ${last ? "transparent" : "var(--line)"}`,
        ...(rest.style || {}),
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute", left: -6, top: 4, width: 11, height: 11, borderRadius: "50%",
          background: current ? "var(--accent)" : "var(--bg)",
          border: `2px solid ${current ? "var(--accent)" : "var(--accent-deep)"}`,
          boxShadow: current ? "0 0 12px 1px rgba(201,242,91,0.5)" : "none",
        }}
      />
      {when && (
        <span style={{ fontFamily: "var(--mono)", fontSize: "var(--fs-mono-sm)", color: "var(--muted)", letterSpacing: "0.04em" }}>
          {when}
        </span>
      )}
      <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "var(--fs-h4)", letterSpacing: "-0.01em", margin: "0.25rem 0 0.1rem", color: "var(--ink)" }}>
        {role}
        {co && <> · <span style={{ color: "var(--accent-ink)" }}>{co}</span></>}
      </h3>
      {children && (
        <p style={{ fontFamily: "var(--display)", color: "var(--ink-2)", fontSize: "var(--fs-sm)", lineHeight: 1.55, marginTop: "0.5rem", maxWidth: "64rem" }}>
          {children}
        </p>
      )}
    </div>
  );
}
