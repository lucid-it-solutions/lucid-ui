import { FormControl, FormField, FormItem } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import React, { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"
import styles from "./matrix.module.scss"

export interface MatrixInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  name: string
}

const FieldSetMatrix = (props: MatrixInputProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className={cn
            (styles.formGroup,"w-full")}>
              <span className="border border-secondary bg-secondary text-background dark:text-foreground">
                {props.title}
              </span>
              <input
                className={cn(
                  styles.formField,
                  "border border-secondary bg-transparent text-primary dark:text-foreground"
                )}
                type={props.type || "text"}
                placeholder="0.00"
                {...props}
                {...field}
              ></input>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default FieldSetMatrix
