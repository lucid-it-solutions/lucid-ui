/* eslint-disable @next/next/no-img-element */
import React from "react";
import NormalButton, { ButtonProps } from "../Button";

const HollowButton = (props: ButtonProps) => {
  return (
    <NormalButton
      style={{
        backgroundColor: "transparent",
        border: "solid 2px #0c6588",
        color: "#0c6588",
      }}
      {...props}
    />
  );
};

export default HollowButton;
