/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./index.module.scss";

export interface FormContentNavProps {
  value: string;
  onSelect: (s: string) => void;
  routes: string[];
}

const FormContentNav = (props: FormContentNavProps) => {
  //const [selectedNav, setSelectedNav] = useState(props.value);

  const { routes } = props;

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navArea}>
          {routes.map((s, i) => (
            <a
              className={
                s === props.value ? styles.selectedNavItem : styles.navItem
              }
              key={i}
              onClick={() => props.onSelect(s)}
            >
              {s}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default FormContentNav;
