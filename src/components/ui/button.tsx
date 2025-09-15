import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-wrap",
  {
    variants: {
      variant: {
        yellow:
          "bg-[#d28c00] text-background dark:text-foreground  hover:bg-[#d28c00]/90 ",
        default:
          "bg-secondary text-background dark:text-foreground hover:bg-secondary/10",
        destructive:
          "bg-red-700  text-destructive-foreground hover:bg-red-700/90",
        outline:
          "border-2 border-secondary hover:bg-secondary hover:text-background dark:hover:text-foreground ",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-secondary dark:text-foreground underline-offset-4 hover:underline",
        green:
          "bg-green-800 text-background dark:text-foreground hover:bg-green-800/90",
      },
      size: {
        // default: "h-10 px-4 py-2",
        default:
          "text-base min-h-[2rem] min-w-[2rem] p-[0.3rem] sm:px-[10px] sm:py-[5px] font-bold leading-none",
        sm: "min-w-[5.5rem] p-[0.6rem] text-[0.75rem] rounded-[5px] font-bold",
        sm_noPadding: "text-[0.75rem]  font-bold",
        lg: " h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={type ? type : "button"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
