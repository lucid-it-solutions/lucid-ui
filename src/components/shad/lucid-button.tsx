import * as React from "react";
import { Button } from "../ui/button"; // still uses ShadCN’s Button
import { cn } from "@/lib/utils";
import styles from "./FieldSetInput/index.module.scss";

export interface LucidButtonProps extends React.ComponentProps<typeof Button> {}

const LucidButton = React.forwardRef<HTMLButtonElement, LucidButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          "bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 font-bold rounded-xl",
          className,
          styles.fieldset
        )}
        {...props}
      >
        Lucid {children}
      </Button>
    );
  }
);

export default LucidButton;
