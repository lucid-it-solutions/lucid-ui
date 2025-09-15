/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.scss";

const ButtonContainerNoWrap = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="buttonContainerNoWrap" {...rest}>
      {children}
    </div>
  );
};

export default ButtonContainerNoWrap;
