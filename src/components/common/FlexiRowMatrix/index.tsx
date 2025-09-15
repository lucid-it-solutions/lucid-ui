/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.scss";

const FlexiRowMatrix = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { title, children, ...rest } = props;

  return (
    <>
      <div style={{}}>
        <div className="title">{title}</div>
        <div className="FlexiRowMatrix" {...rest}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FlexiRowMatrix;
