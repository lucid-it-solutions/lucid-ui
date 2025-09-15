/* eslint-disable react/display-name */
import { HTMLAttributes } from "react";
import styles from "./index.scss";
import React from "react";

export interface ActionAreaProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ActionArea = React.forwardRef<HTMLDivElement, ActionAreaProps>(
  (props: ActionAreaProps, ref) => {
    const { children, ...rest } = props;
    return (
      <div className="actionContainer" {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

export default ActionArea;
