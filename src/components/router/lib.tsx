import { forwardRef } from "react";

import { useHref, useLinkClickHandler } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type CustomLinkProps = Omit<LinkProps, "onClick">;

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ relative, replace, state, target, to, preventScrollReset, ...rest }, ref) => {
    const href = useHref(to, { relative });

    const internalOnClick = useLinkClickHandler(to, {
      relative,
      replace,
      state,
      target,
      preventScrollReset,
    });

    return (
      <a
        {...rest}
        href={href}
        onClick={(event) => {
          if (!event.defaultPrevented) internalOnClick(event);
        }}
        ref={ref}
        target={target}
      />
    );
  }
);
