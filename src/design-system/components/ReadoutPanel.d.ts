import * as React from "react";

/**
 * Operator console panel — labelled header over key/value readout rows.
 *
 * @startingPoint section="Core" subtitle="Console readout / service-summary panel" viewport="360x300"
 */
export interface ReadoutPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase header label (gets a static lime dot) */
  title?: React.ReactNode;
  /** Rows as data; or omit and pass <PanelRow> children */
  rows?: Array<{ k: React.ReactNode; v: React.ReactNode; ok?: boolean }>;
  children?: React.ReactNode;
}
export function ReadoutPanel(props: ReadoutPanelProps): JSX.Element;

export interface PanelRowProps {
  k?: React.ReactNode;
  v?: React.ReactNode;
  /** Paint the value electric-lime with a live dot */
  ok?: boolean;
  /** Drop the bottom border (last row) */
  last?: boolean;
}
export function PanelRow(props: PanelRowProps): JSX.Element;
