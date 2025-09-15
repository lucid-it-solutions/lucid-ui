import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import styles from "./index.scss";

export const SideFilterStationary = (props: any) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {},
    children,
    ...rest
  } = props;

  return (
    <div
      className={`${
        isOpen ? "sideFilter" : "sideFilterHidden2"
      } dark:bg-primary`}
    >
      <div className={styles.hideButton} onClick={toggleSideNav}>
        <div className="dark:text-white">{header}</div>
        <hr className={styles.line} />
        {isOpen ? (
          <FaChevronCircleUp size="1.3rem" className="hiddenOnBigScreen" />
        ) : (
          <FaChevronCircleDown size="1.3rem" className="hiddenOnBigScreen" />
        )}
      </div>

      <div
        className={
          isOpen ? "filterFieldContainer" : "filterFieldContainerHidden"
        }
      >
        {children}
      </div>
    </div>
  );
};
