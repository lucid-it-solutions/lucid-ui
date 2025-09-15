// "use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { FormControl } from "../ui/form";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

export type CommboboxItem = {
  label: string;
  value: string;
};

export interface ComboboxProps {
  field: any;
  label: string;
  data: CommboboxItem[];
  onChange: (d: string) => void;
}

export const Combobox = ({ field, label, data, onChange }: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {field.value
              ? data.find((d) => d.value === field.value)?.label
              : label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={label} />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {data.map((d) => (
                <CommandItem
                  className="cursor-pointer"
                  key={d.value}
                  value={d.label}
                  onSelect={(currentValue) => {
                    // setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    // form.setValue(name, d.value);
                    onChange(d.value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value === d.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {d.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
