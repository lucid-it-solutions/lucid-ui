/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  shrink?: boolean;
}
const NormalButton = (props: ButtonProps) => {
  const { text, shrink = false, children, type, ...rest } = props;

  return (
    <button
      className={shrink ? "buttonSmall" : "button"}
      {...rest}
      type={type ? type : "button"}
    >
      {children}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

export default NormalButton;
