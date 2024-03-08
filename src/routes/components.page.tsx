import type { FC } from "react";

export const Component: FC = () => {
  return (
    <main className="container mx-auto max-w-screen-lg">
      <header className="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="components" className="font-bold text-xl lg:text-2xl select-none">
          Components
        </h1>
      </header>
    </main>
  );
};

if (import.meta.env.DEV) Component.displayName = "components.page";
