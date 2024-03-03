import { forwardRef, useMemo } from "react";

import { Avatar as ArkAvatar } from "@ark-ui/react";
import type { AvatarImageProps } from "@ark-ui/react";

import type { VariantsOfGroup } from "@klass/core/group";

import type { ClassNamesProps } from "./../types.ts";

import styles from "./Avatar.styles.ts";

export type AvatarProps = AvatarImageProps & ClassNamesProps<keyof typeof styles> & VariantsOfGroup<typeof styles>;

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(({ size, className, classNames, children, ...props }, ref) => {
  const cx = useMemo(() => {
    const variants = { size };
    return {
      root: styles.root(variants, classNames?.root),
      fallback: styles.fallback(variants, classNames?.fallback),
      image: styles.image(variants, className ?? classNames?.image),
    };
  }, [size, className, classNames]);

  return (
    <ArkAvatar.Root className={cx.root}>
      <ArkAvatar.Fallback className={cx.fallback}>{children}</ArkAvatar.Fallback>
      <ArkAvatar.Image ref={ref} className={cx.image} {...props} />
    </ArkAvatar.Root>
  );
});

if (import.meta.env.DEV) Avatar.displayName = "Avatar";
