import React, { InputHTMLAttributes } from "react";
import styles from "./index.scss";
import Toggle, { ToggleProps } from "./toggle";

export interface FieldSetInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: Exclude<React.HTMLInputTypeAttribute, "checkbox" | "radio">;
  containerstyle?: React.CSSProperties;
  containerstyle2?: React.CSSProperties;
  customBG?: boolean;
}

const toggleInputs = ["checkbox", "radio"];

const FieldSetInput = (props: FieldSetInputProps) => {
  if (toggleInputs.includes(props.type || "text")) {
    return <></>;
  }
  const {
    customBG,
    containerstyle,
    type,
    placeholder,
    containerstyle2,
    ...others
  } = props;
  return (
    <>
      <fieldset
        className={customBG ? "fieldsetCuston" : "fieldset"}
        style={containerstyle}
        input-type={type || "text"}
      >
        <legend>{placeholder}</legend>
        <input
          style={containerstyle2}
          type={type}
          placeholder={placeholder}
          {...others}
          autoComplete="off"
        />
      </fieldset>
    </>
  );
};

export interface FieldSetToggleProps extends ToggleProps {
  placeholder: string;
  longLegend?: boolean;
}

export const FieldSetToggle = (props: FieldSetToggleProps) => {
  const { disabled = false, longLegend = false } = props;
  return (
    <>
      <fieldset
        className={styles.fieldset}
        input-type="checkbox"
        data-disabled={disabled}
      >
        {longLegend ? (
          <legend className={styles.longLegend}>{props.placeholder}</legend>
        ) : (
          <legend>{props.placeholder}</legend>
        )}
        <Toggle {...props} />
      </fieldset>
    </>
  );
};

export default FieldSetInput;
