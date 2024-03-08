import { forwardRef } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

import { IconButton, type IconButtonVariants } from "~/components/ui";

import { toggleTheme, useTheme } from "~/store/theme.ts";

type ThemeTogglerIconButtonProps = IconButtonVariants;

export const ThemeTogglerIconButton = forwardRef<HTMLButtonElement, ThemeTogglerIconButtonProps>((props, ref) => {
  const theme = useTheme();

  return (
    <IconButton ref={ref} {...props} onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
});
