import type { FC } from "react";

export const Component: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div className="h-40 bg-neutral-2 rounded-lg" />
      <div className="h-40 bg-neutral-2 rounded-lg" />
      <div className="lg:col-span-2 h-40 bg-neutral-2 rounded-lg" />
      <div className="h-40 bg-neutral-2 rounded-lg" />
      <div className="h-40 bg-neutral-2 rounded-lg" />
      <div className="lg:col-span-2 h-40 bg-neutral-2 rounded-lg" />
    </div>
  );
};

if (import.meta.env.DEV) Component.displayName = "dash.index.page";
