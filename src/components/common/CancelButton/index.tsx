/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";

export interface CancelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const CancelButton = (props: CancelButtonProps) => {
  const { text, children, ...rest } = props;

  return (
    <button className="CancelButton" {...rest}>
      {children}
      <span>{text}</span>
    </button>
  );
};

export default CancelButton;
