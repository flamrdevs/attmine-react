import type { FC } from "react";

export const Component: FC = () => {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <h1 className="font-mono text-xl">404 | Page not found</h1>
    </main>
  );
};

if (import.meta.env.DEV) Component.displayName = "404.page";
