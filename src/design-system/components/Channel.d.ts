import * as React from "react";

/** A contact row in the "reach me" console — mono key, value, go-arrow. */
export interface ChannelProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Mono key, e.g. "Email" / "GitHub" */
  label?: React.ReactNode;
  /** Address / handle */
  value?: React.ReactNode;
  href?: string;
  /** Opens in a new tab */
  external?: boolean;
  /** Last row — drops the divider */
  last?: boolean;
}

export function Channel(props: ChannelProps): JSX.Element;
