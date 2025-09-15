import React, { TextareaHTMLAttributes } from "react";
import styles from "./index.module.scss";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

export interface FieldSetTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  name: string;
}

// eslint-disable-next-line react/display-name
const FieldSetTextAreaCN = React.forwardRef<
  HTMLTextAreaElement,
  FieldSetTextAreaProps
>((props: FieldSetTextAreaProps, ref) => {
  const { control } = useFormContext();
  return (
    <div className="flex-1">
      <FormField
        control={control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <fieldset
                className={cn(
                  styles.fieldset,
                  "rounded-sm border border-border dark:border-[#568293] "
                )}
              >
                <legend className="text-border dark:text-[#568293]">
                  {props.placeholder}
                </legend>
                <textarea {...props} {...field} ref={field.ref} />
              </fieldset>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
});

export default FieldSetTextAreaCN;
