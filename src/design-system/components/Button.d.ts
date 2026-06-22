import * as React from "react";

/**
 * Terminal control button — mono label, hairline-outline ghost or lime fill.
 *
 * @startingPoint section="Core" subtitle="Console-style action button" viewport="340x120"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** `default` = outline ghost · `primary` = electric-lime fill */
  variant?: "default" | "primary";
  /** Render as a different element (defaults to "a" when href is set) */
  as?: any;
  /** When set, renders an anchor */
  href?: string;
}

export function Button(props: ButtonProps): JSX.Element;
