import * as React from "react";

/** Signature section kicker — wide-tracked uppercase mono with a lime rule. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
