import type { FC } from "react";

import { Link } from "react-router-dom";

import { ArrowUpRightIcon, ComponentIcon, LayoutDashboardIcon, StarIcon } from "lucide-react";

import { Badge, Button } from "~/components/ui";
import { ThemeTogglerIconButton } from "~/components/theme";

export const Component: FC = () => {
  const links = [
    {
      title: "Dashboard",
      href: "/dash",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Components",
      href: "/components",
      icon: ComponentIcon,
    },
  ];

  return (
    <main className="container mx-auto max-w-screen-lg">
      <header className="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="attmine-react" className="font-bold text-2xl lg:text-3xl select-none">
          Attmine React
        </h1>

        <Badge>WIP</Badge>

        <div className="grow" />

        <Button as="a" href="https://github.com/flamrdevs/attmine-react" target="_blank" className="hidden md:inline-flex">
          <span>Star on GitHub</span>
          <StarIcon />
        </Button>

        <ThemeTogglerIconButton />
      </header>

      <main className="my-12 lg:my-16">
        <h2 id="get-started" className="mb-4 font-medium text-center text-xl lg:text-2xl select-none">
          Get started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 p-4 sm:p-5 md:p-6 lg:p-7">
          {links.map((link) => {
            return (
              <Link
                to={link.href}
                className="group px-6 py-5 bg-neutral-2 hover:bg-neutral-3 outline-none select-none border border-neutral-4 hover:border-neutral-6 rounded-2xl shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1"
              >
                <div className="flex items-center gap-2 lg:gap-3 text-lg lg:text-xl">
                  <span className="p-1 border border-neutral-4 group-hover:border-neutral-6 rounded-lg">
                    <link.icon className="text-neutral-9 group-hover:text-neutral-11 group-focus-visible:text-neutral-11" />
                  </span>
                  <span className="text-neutral-11 group-hover:text-neutral-12 group-focus-visible:text-neutral-12">{link.title}</span>
                </div>

                <div className="flex justify-end mt-4">
                  <ArrowUpRightIcon className="size-7 text-neutral-9 group-hover:text-neutral-11 group-focus-visible:text-neutral-11 transition group-hover:-translate-y-1 group-focus-visible:-translate-y-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="mx-auto px-4 md:px-8">
        <span className="block text-center text-sm text-neutral-7">
          created by{" "}
          <a
            href="https://github.com/flamrdevs"
            target="_blank"
            className="text-neutral-7 hover:text-neutral-9 outline-none focus-visible:text-neutral-9"
          >
            flamrdevs
          </a>
        </span>
      </footer>
    </main>
  );
};

if (import.meta.env.DEV) Component.displayName = "index.page";
