"use client";

import styles2 from "./index.scss";

export const ModalDivider = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className={styles2.Divider}>{children}</div>;
};

export const LeftSideUpPart = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className={styles2.leftSide}>{children}</div>;
};

export interface RightSideDownPartProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header: string;
}

export const RightSideDownPart = (props: RightSideDownPartProps) => {
  const { children, header } = props;
  return (
    <>
      <div>
        <label style={{ fontWeight: "bold" }}>{header}</label>
        <div className="right">{children}</div>
      </div>
    </>
  );
};

export const Divider = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className={styles2.divider}></div>;
};

export default ModalDivider;
