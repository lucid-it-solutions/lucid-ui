/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.scss";

const FieldFlexRowWrap = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="fledFieldRowWrap" {...rest}>
      {children}
    </div>
  );
};

export default FieldFlexRowWrap;
