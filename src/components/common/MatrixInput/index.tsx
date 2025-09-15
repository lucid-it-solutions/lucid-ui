import React, { InputHTMLAttributes } from "react"
import "./index.scss"
import { cn } from "@/lib/utils"

export interface MatrixInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const MatrixInput = (props: MatrixInputProps) => {
  return (
    <div className="form-group">
      <span className="border border-secondary bg-secondary text-background dark:text-foreground">
        {props.title}
      </span>
      <input
        className={cn(
          "form-field",
          "border border-secondary bg-transparent text-primary dark:text-foreground"
        )}
        type={props.type || "text"}
        placeholder="0.00"
        {...props}
      ></input>
    </div>
  )
}
export default MatrixInput
