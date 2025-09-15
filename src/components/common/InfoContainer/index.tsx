/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.module.scss";

const InfoContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="infoContainer" {...rest}>
      {children}
    </div>
  );
};

export default InfoContainer;
