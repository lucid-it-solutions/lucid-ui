"use client";

import React from "react";

const FlexField = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="flex-1" {...rest}>
      {children}
    </div>
  );
};

export default FlexField;
