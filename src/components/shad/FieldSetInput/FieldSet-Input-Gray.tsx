import React, { InputHTMLAttributes } from "react";
import styles from "./index2.module.scss";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Toggle, { ToggleProps } from "./FieldSet-Toggle";
import { useFormContext } from "react-hook-form";
import moment from "moment";

export interface FieldSetInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: Exclude<React.HTMLInputTypeAttribute, "checkbox" | "radio">;
  containerstyle?: React.CSSProperties;
  containerstyle2?: React.CSSProperties;
  customBG?: boolean;
  // control: any;
  name: string;
}

const toggleInputs = ["checkbox", "radio"];

const FieldSetInputCN = (props: FieldSetInputProps) => {
  const { control } = useFormContext();

  if (toggleInputs.includes(props.type || "text")) {
    return <></>;
  }

  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem>
            {/* <FormLabel>Name</FormLabel> */}
            <FormControl>
              <fieldset
                className={cn(
                  styles.fieldset,
                  "rounded-sm border border-border dark:border-[#568293]  "
                )}
                input-type={props.type || "text"}
              >
                <legend
                  className={cn(
                    "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                  )}
                >
                  {props.placeholder}
                </legend>
                <input
                  className={cn(
                    "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                    props.customBG ? "bg-[#e9eff6]" : "bg-white"
                  )}
                  style={props.containerstyle2}
                  {...field}
                  {...props}
                  value={
                    props.type?.toLowerCase() === "date"
                      ? moment(
                          field.value?.split("T").length > 1
                            ? field.value?.split("T")[0]
                            : field.value
                        ).format("YYYY-MM-DD")
                      : props.type?.toLowerCase() === "time"
                      ? moment(field.value).format("HH:mm")
                      : field.value
                  }
                  autoComplete="off"
                />
              </fieldset>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export interface FieldSetToggleProps extends ToggleProps {
  placeholder: string;
  longLegend?: boolean;
  name: string;
}

export const FieldSetToggleCN = (props: FieldSetToggleProps) => {
  const { disabled = false, longLegend = false } = props;

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => {
        const { ref, ...fieldWithoutRef } = field;

        return (
          <FormItem>
            <FormControl>
              <fieldset
                className={styles.fieldset}
                input-type="checkbox"
                data-disabled={disabled}
              >
                {longLegend ? (
                  <legend
                    className={cn(
                      styles.longLegend,
                      "text-border dark:text-foreground"
                    )}
                  >
                    {props.placeholder}
                  </legend>
                ) : (
                  <legend className="text-border dark:text-foreground">
                    {props.placeholder}
                  </legend>
                )}
                <Toggle {...props} {...fieldWithoutRef} />
              </fieldset>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FieldSetInputCN;
