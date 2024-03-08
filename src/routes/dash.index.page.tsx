import type { FC } from "react";

export const Component: FC = () => {
  return (
    <span>
      <span>index</span>
    </span>
  );
};

if (import.meta.env.DEV) Component.displayName = "dash.index.page";
