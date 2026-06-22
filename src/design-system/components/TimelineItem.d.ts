import * as React from "react";

/** One entry in the "uptime history / career log" timeline. */
export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono date range, e.g. "Aug 2025 — Present" */
  when?: React.ReactNode;
  role?: React.ReactNode;
  /** Company (rendered lime after a ·) */
  co?: React.ReactNode;
  children?: React.ReactNode;
  /** Current role — lights the node dot lime with a glow */
  current?: boolean;
  /** Last item — drops the connecting rule */
  last?: boolean;
}

export function TimelineItem(props: TimelineItemProps): JSX.Element;
