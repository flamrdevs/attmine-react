import type { FC } from "react";

import { Outlet } from "react-router-dom";

import { ThemeTogglerIconButton } from "~/components/theme";

export const Component: FC = () => {
  return (
    <main className="container mx-auto max-w-screen-lg">
      <header className="flex items-center justify-between gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="dashboard" className="font-bold text-xl lg:text-2xl select-none">
          Dashboard
        </h1>

        <ThemeTogglerIconButton />
      </header>
      <main className="p-4 sm:p-5 md:p-6 lg:p-7">
        <Outlet />
      </main>
    </main>
  );
};

if (import.meta.env.DEV) Component.displayName = "dash.layout";
