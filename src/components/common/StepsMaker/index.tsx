/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.scss";

export interface StepsMakerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data?: string[];
  handleStepChange?: () => void;
  stepValue?: number;
}

const StepsMaker = (props: StepsMakerProps) => {
  const { data = [], stepValue = 0 } = props;

  return (
    <div className="stepRow">
      <hr
        style={data.length > 6 ? { width: "90%" } : { width: "80%" }}
        className={styles.line}
      />

      <hr
        className="loadline"
        style={{ width: `${((stepValue + 1) / data.length) * 100}%` }}
      />
      {data.map((x, i) => {
        return (
          <div
            key={i}
            style={{
              width: "200px",
              justifyContent: "start",
            }}
            className={stepValue == i ? "stepColumnActive" : "stepColumn"}
          >
            <div
              className={`${
                stepValue == i
                  ? "outerCircleActive" + ` dark:border-white`
                  : "outerCircle" + " dark:border-primary"
              } dark:bg-primary`}
            >
              <div
                className={`${
                  stepValue == i ? "innerCircleActive" : "innerCircle"
                } dark:border-black`}
              >
                <h1
                  className={`${
                    stepValue == i
                      ? "numberActive" + " dark:text-white"
                      : "number"
                  } `}
                >
                  {i + 1}
                </h1>
              </div>
            </div>
            <div className="columnDiv">
              <p className="smallText">
                Step {i + 1} of {data.length}
              </p>
              <p
                style={{ textAlign: "center" }}
                className={
                  stepValue == i ? "labelActive" + " dark:text-white" : "label"
                }
              >
                {data[i]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsMaker;
