/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.scss";

export interface LabelContentContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header?: string;
}
const LabelContentContainerNoPadding = (props: LabelContentContainerProps) => {
  const { header, children, ...rest } = props;

  return (
    <div className="labelContentContainerPadding" {...rest}>
      {header ? (
        <span className="labelContentContainerHeader">{header}</span>
      ) : null}
      {children}
    </div>
  );
};

export default LabelContentContainerNoPadding;
