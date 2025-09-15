/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.module.scss";

const ContentGrid = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="contentGrid" {...rest}>
      {children}
    </div>
  );
};

export default ContentGrid;
