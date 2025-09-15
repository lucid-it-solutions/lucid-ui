/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.module.scss";

export interface LabelContentContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header?: string;
}
const LabelContentContainer = (props: LabelContentContainerProps) => {
  const { header, children, ...rest } = props;

  return (
    <div className="labelContentContainer" {...rest}>
      {header ? (
        <span className="labelContentContainerHeader">{header}</span>
      ) : null}
      {children}
    </div>
  );
};

export default LabelContentContainer;
