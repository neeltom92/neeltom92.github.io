import * as React from "react";

/** Pulsing electric-lime heartbeat dot — the "all systems operational" signal. */
export interface StatusDotProps extends React.HTMLAttributes<HTMLElement> {
  /** `accent` = lime · `amber` = open-source / secondary */
  tone?: "accent" | "amber";
  /** Diameter in px */
  size?: number;
  /** Pulse the phosphor glow */
  pulse?: boolean;
  /** Optional trailing mono label (renders an inline status line) */
  label?: React.ReactNode;
}

export function StatusDot(props: StatusDotProps): JSX.Element;
