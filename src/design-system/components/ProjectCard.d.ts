import * as React from "react";

/**
 * A "component" on the work grid — numbered, status-tagged, lifts with a lime edge wipe.
 *
 * @startingPoint section="Core" subtitle="Project / work card" viewport="400x260"
 */
export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Position number, rendered zero-padded (1 -> "01") */
  index?: number;
  /** Mono kicker tag, e.g. "open source · MCP server" */
  tag?: React.ReactNode;
  /** Open-source: recolours the tag + LED amber */
  oss?: boolean;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  /** Tech stack chips */
  stack?: string[];
  /** External link (renders a corner ↗ arrow) */
  href?: string;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
