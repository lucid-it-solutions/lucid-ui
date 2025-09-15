/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.scss";

import { skeletonSizes } from "@/values";

export interface SkeletonSpanProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size?: skeletonSizes.small | skeletonSizes.medium | skeletonSizes.wide;
}

const SkeletonSpan = (props: SkeletonSpanProps) => {
  const { size = skeletonSizes.wide, ...rest } = props;

  return (
    <h1 className={styles.skeleton} {...rest} style={{ width: `${size}` }}>
      {""}
    </h1>
  );
};

export default SkeletonSpan;
