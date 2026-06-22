import * as React from "react";

/** Recessed mono tech tag — the atomic unit of stacks and skill cards. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Lime phosphor treatment for an active / featured tag */
  lit?: boolean;
}

export function Chip(props: ChipProps): JSX.Element;
