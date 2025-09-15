/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./index.scss";

export interface YellowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const YellowButton = (props: YellowButtonProps) => {
  const { text, children, ...rest } = props;

  return (
    <button className="yellowButton" {...rest}>
      {children}
      <span>{text}</span>
    </button>
  );
};

export default YellowButton;
