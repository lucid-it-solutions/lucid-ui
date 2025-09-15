import { HTMLAttributes } from "react";
import styles from "./index.scss";

export interface ActionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ActionContainer = (props: ActionContainerProps) => {
  const { children, ...rest } = props;
  return (
    <div className="actionButtonContainer" {...rest}>
      {children}
    </div>
  );
};

export default ActionContainer;
