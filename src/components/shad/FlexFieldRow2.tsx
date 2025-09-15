/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React from "react";

const FieldFlexRow2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col justify-start gap-4 flex-wrap md:flex-row",
        className
      )}
      // className="flex flex-col justify-start gap-4 flex-wrap md:flex-row"
      {...rest}
    >
      {children}
    </div>
  );
};

export default FieldFlexRow2;
