"use client";

import React, { useCallback, useEffect, useRef } from "react";
import styles from "./index.scss";

export type ToggleChangedProps = {
  target: { value: boolean; name: string };
};

export type ToggleProps = {
  onChange?: (checked: ToggleChangedProps) => void;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  checkedValue?: string;
  notCheckedValue?: string;
};

const Toggle = (props: ToggleProps) => {
  const {
    checked = false,
    onChange = () => {},
    disabled = false,
    name = "",
    checkedValue = "YES",
    notCheckedValue = "NO",
  } = props;
  const toggleRef = useRef(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleRef.current = checked;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", checked.toString());
  }, [checked]);
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
        <span>{checkedValue}</span>
      </span>
      <span onClick={toggleNo}>
        <span>{notCheckedValue}</span>
      </span>
      <div className="marker" ref={markerRef}>
        <span>{checked ? checkedValue : notCheckedValue}</span>
      </div>
      {disabled ? (
        <div className="disabledLevel">
          {checked ? checkedValue : notCheckedValue}
        </div>
      ) : null}
    </div>
  );
};

export default Toggle;
