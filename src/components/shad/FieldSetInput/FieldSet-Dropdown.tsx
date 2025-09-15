// "use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { useFormContext } from "react-hook-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import styles from "./index.module.scss";
export const dataTest = [
  {
    value: "100",
    label: "Short Text",
  },
  {
    value: "200",
    label: "Long Text",
  },
  {
    value: "300",
    label: "Number",
  },
  {
    value: "400",
    label: "Date",
  },
  {
    value: "500",
    label: "List",
  },
];

export type ComboboxItem = {
  label: string;
  value: string;
};

export interface ComboboxProps {
  label: string;
  description?: string;
  name: string;
  placeholder: string;
  data: ComboboxItem[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  darkColoredPlaceholder?: boolean;
}

export const FieldSetDropdown = ({
  label,
  placeholder,
  name,
  data,
  disabled = false,
  darkColoredPlaceholder = false,
  onChange = () => {},
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const { control } = useFormContext();
  const isDesktop = useMediaQuery("(min-width: 400px) and (min-height: 720px)");

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {/* <FormLabel>{label}</FormLabel> */}

          {
            // isDesktop ?
            <Popover open={open} onOpenChange={setOpen}>
              {!disabled ? (
                <PopoverTrigger asChild>
                  <fieldset
                    className={cn(
                      styles.fieldset,
                      "w-full rounded-sm border border-border dark:border-[#568293] "
                    )}
                  >
                    <legend className="text-border dark:text-[#568293]">
                      {label}
                    </legend>
                    <div className=" flex w-full flex-row items-center justify-between px-3 pb-2 pt-1">
                      {field.value && field.value != -1 ? (
                        data.find((d) => d.value == field.value)?.label
                      ) : (
                        <span
                          className={
                            darkColoredPlaceholder
                              ? "text-black"
                              : "text-border"
                          }
                        >
                          {placeholder}
                        </span>
                      )}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-border opacity-50" />
                    </div>
                  </fieldset>
                </PopoverTrigger>
              ) : (
                <fieldset className={cn(styles.fieldset, "w-full border-none")}>
                  <legend className="text-border dark:text-[#568293]">
                    {label}
                  </legend>
                  <div className=" flex w-full flex-row items-center justify-between px-3 pb-2 pt-1">
                    {field.value && field.value != -1 ? (
                      data.find((d) => d.value == field.value)?.label
                    ) : (
                      <span className="text-foreground">
                        {placeholder || "Select from List"}
                      </span>
                    )}
                    {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-border opacity-50" /> */}
                  </div>
                </fieldset>
              )}
              <FormControl>
                <PopoverContent
                  className={cn(
                    "  z-[101]  w-[--radix-popover-trigger-width] p-0"
                  )}
                >
                  <DataListMaker
                    name={name}
                    data={data}
                    fieldValue={field.value}
                    setOpen={setOpen}
                    onChange={onChange}
                  />
                </PopoverContent>
              </FormControl>
            </Popover>
            //  : (
            //   <Drawer open={open} onOpenChange={setOpen}>
            //     {!disabled ? (
            //       <DrawerTrigger asChild>
            //         <fieldset
            //           className={cn(
            //             styles.fieldset,
            //             "w-full rounded-sm border border-border dark:border-[#568293] "
            //           )}
            //         >
            //           <legend className="text-border dark:text-foreground">
            //             {placeholder}
            //           </legend>
            //           <div className=" flex w-full flex-row items-center justify-between px-3 pb-2 pt-0">
            //             {field.value && field.value != -1 ? (
            //               <span className="text-[0.75rem]">
            //                 {data.find((d) => d.value == field.value)?.label}
            //               </span>
            //             ) : (
            //               <span
            //                 className={
            //                   darkColoredPlaceholder
            //                     ? "text-[1rem] text-black "
            //                     : "text-[1rem] text-border"
            //                 }
            //               >
            //                 {placeholder}
            //               </span>
            //             )}
            //             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-border opacity-50" />
            //           </div>
            //         </fieldset>
            //       </DrawerTrigger>
            //     ) : (
            //       <fieldset className={cn(styles.fieldset, "w-full")}>
            //         <legend className="text-border dark:text-foreground">
            //           {placeholder}
            //         </legend>
            //         <div className=" flex w-full flex-row items-center justify-between px-3 pb-2 pt-0">
            //           {field.value && field.value != -1 ? (
            //             <span className="text-[0.75rem] text-foreground">
            //               {data.find((d) => d.value == field.value)?.label}
            //             </span>
            //           ) : (
            //             <span className="text-[1rem] text-foreground">
            //               {placeholder}
            //             </span>
            //           )}
            //           {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-border opacity-50" /> */}
            //         </div>
            //       </fieldset>
            //     )}
            //     <FormControl>
            //       <DrawerContent className="z-[101]">
            //         <div className="mt-4 border-t">
            //           <DataListMaker
            //             name={name}
            //             data={data}
            //             fieldValue={field.value}
            //             setOpen={setOpen}
            //             onChange={onChange}
            //           />
            //         </div>
            //       </DrawerContent>
            //     </FormControl>
            //   </Drawer>
            // )
          }

          {/* <FormDescription></FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

function DataListMaker({
  name,
  data,
  fieldValue,
  setOpen,
  onChange = (value: string) => {},
}: {
  data: ComboboxItem[];
  name: string;
  fieldValue: string;
  setOpen: (arg0: boolean) => void;
  onChange: (value: string) => void;
}) {
  const { setValue } = useFormContext();

  return (
    <Command className={cn("w-full")}>
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {data.map((content) => (
            <CommandItem
              key={content.value}
              value={content.label}
              onSelect={() => {
                setValue(name, content.value);
                setOpen(false);
                onChange(content.value);
              }}
            >
              {content.label}
              <CheckIcon
                className={cn(
                  "ml-auto h-4 w-4",
                  content.value === fieldValue ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default FieldSetDropdown;
