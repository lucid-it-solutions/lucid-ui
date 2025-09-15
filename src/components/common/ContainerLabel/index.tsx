/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";

export interface ContainerLabelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  img?: string;
  text: string;
}

const ContainerLabel = (props: ContainerLabelProps) => {
  const { img, text, children, ...rest } = props;

  return (
    <div className="containerLabel" {...rest}>
      <div className="imageContainer">
        {img ? <img src={img} alt="LabelIcon" /> : children}
      </div>
      <span className="dark:text-muted">{text}</span>
    </div>
  );
};

export default ContainerLabel;
