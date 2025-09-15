"use client";

import React, { useCallback, useEffect, useRef } from "react";
import styles from "./index.scss";

export type ToggleChangedProps = {
  target: { value: boolean; name: string };
};

export type ToggleProps = {
  value?: boolean;
  onChange?: (checked: ToggleChangedProps) => void;
  disabled?: boolean;
  name?: string;
};

const FilterToggle = (props: ToggleProps) => {
  const {
    value = true,
    onChange = () => {},
    disabled = false,
    name = "",
  } = props;
  const toggleRef = useRef(true);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleRef.current = value;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", value.toString());
  }, [value]);
  const toggleYes = useCallback(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = useCallback(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return (
    <div className="toggleContainer" data-disabled={disabled}>
      <span onClick={toggleYes}>
        <span>For Approval</span>
      </span>
      <span onClick={toggleNo}>
        <span>History</span>
      </span>
      <div className={styles.marker} ref={markerRef}></div>
    </div>
  );
};

export default FilterToggle;
