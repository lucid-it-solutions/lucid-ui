/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.scss";
import { skeletonSizes } from "@/values";

export interface LabelContentComponent
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
  content?: string;
  loading?: boolean;
  size?: skeletonSizes.small | skeletonSizes.medium | skeletonSizes.wide;
  highlight?: boolean;
}

const LabelContentComponent = (props: LabelContentComponent) => {
  const {
    children,
    label = "Label",
    content = "",
    loading = false,
    size = skeletonSizes.small,
    highlight,
    ...rest
  } = props;

  return (
    <div className="labelContentContainer" {...rest}>
      <span className={`label dark:text-accent-foreground`}>{label}</span>
      <div className="content">
        {loading ? (
          <span className="skeleton" style={{ width: `${size}` }}>
            {content}
          </span>
        ) : (
          <span
            className={`${highlight ? "text-orange" : "dark:text-white"} ${
              content === "--no change--" ? "italic" : ""
            }`}
          >
            {content == "" ? "No Information" : content}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default LabelContentComponent;
