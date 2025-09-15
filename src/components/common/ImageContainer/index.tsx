/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.scss";

export interface ImageContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  src?: string;
  alt?: string;
  loading?: boolean;
}

const ImageContainer = (props: ImageContainerProps) => {
  const {
    src = undefined,
    alt = "No image found",
    loading = false,
    ...rest
  } = props;

  if (loading) {
    return <div className="skeleton" {...rest}></div>;
  } else {
    return (
      <div className="imageContainer" {...rest}>
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "100%" }}
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/images/lucid-placeholder.png";
            }}
          />
        ) : null}
      </div>
    );
  }
};

export default ImageContainer;
