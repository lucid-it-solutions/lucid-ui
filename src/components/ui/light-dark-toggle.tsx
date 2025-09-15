"use client";

import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

type Props = {
  className?: string;
};

const LightDarkToggle = ({ className }: Props) => {
  const [themePreferences, setThemePreferences] = useState<string>(
    hasCookie("theme") ? (getCookie("theme") as string) : "light"
  );

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setThemePreferences((prev) => {
              if (prev === "light") {
                setCookie("theme", "dark");
                return "dark";
              }

              if (prev === "dark") {
                setCookie("theme", "light");
                return "light";
              }

              return "light";
            });
            document.body.classList.toggle("dark");
          }}
        >
          {themePreferences === "light" ? (
            <SunIcon className="text-red-500" />
          ) : (
            <MoonIcon className="text-red-500" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          {themePreferences === "light"
            ? "Enable dark mode"
            : "Enable light mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
