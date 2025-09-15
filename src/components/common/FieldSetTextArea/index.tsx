import React, { TextareaHTMLAttributes } from "react";
import styles from "./index.scss";

export interface FieldSetTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

// eslint-disable-next-line react/display-name
const FieldSetTextArea = React.forwardRef<
  HTMLTextAreaElement,
  FieldSetTextAreaProps
>((props: FieldSetTextAreaProps, ref) => {
  return (
    <>
      <fieldset className="fieldsetTextArea">
        <legend>{props.placeholder}</legend>
        <textarea {...props} ref={ref} />
      </fieldset>
    </>
  );
});

export default FieldSetTextArea;
