import * as React from "react";

/** A "monitored system" in the toolchain grid — mono ▮ header over tech chips. */
export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group label, e.g. "Observability" */
  heading?: React.ReactNode;
  /** Chip contents */
  items?: string[];
}

export function SkillCard(props: SkillCardProps): JSX.Element;
