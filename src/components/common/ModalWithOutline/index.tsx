"use client";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
import { cn } from "@/lib/utils";

export type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  header?: string;
  show?: boolean;
  children?: React.ReactNode;
  size?: ModalSize;
}

const ModalWithOutline = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}: ModalProps) => {
  const modalSize: any = { "modal-size": size };
  return (
    <>
      {show ? (
        <div className={cn("modalBackground", "h-full")} role="modal-bg">
          <div
            className={cn("modalContainer", "bg-background")}
            {...rest}
            //open={show}
            {...modalSize}
          >
            {/* Header Container */}
            <div className="modalHeaderContainer">
              <span className={cn("modalHeader", "text-foreground")}>
                {header}
              </span>
            </div>
            {/* Content */}
            <div className={"contentContainer"}>{children}</div>
            {/* Footer Cntainer */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWithOutline;
