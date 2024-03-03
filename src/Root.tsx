import type { FC } from "react";

import { Outlet } from "react-router-dom";

export const Component: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

if (import.meta.env.DEV) Component.displayName = "Root";
