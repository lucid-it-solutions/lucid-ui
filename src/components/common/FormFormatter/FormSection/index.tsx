/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ColumnContainer } from "@/components/common";
import styles from "./index.scss";

export interface FormSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sectionName: string;
  selectedSection?: string;
}

const FormSection = (props: FormSectionProps) => {
  const { sectionName, selectedSection, children, ...rest } = props;

  if (selectedSection === sectionName)
    return (
      <ColumnContainer className="formSection" {...rest}>
        {children}
      </ColumnContainer>
    );
  else {
    return null;
  }
};

export default FormSection;
