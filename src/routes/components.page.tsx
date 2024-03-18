import type { FC, PropsWithChildren } from "react";

import { PlusIcon, RocketIcon } from "lucide-react";

import { Badge, Button, IconButton } from "~/components/ui";

const Section = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div>
      <h2 className="font-medium text-lg lg:text-xl">{props.title}</h2>

      <div className="flex flex-col items-stretch gap-4 p-3">{props.children}</div>
    </div>
  );
};

Section.Sub = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div>
      <h3 className="font-normal text-base lg:text-lg"> {props.title}</h3>

      <div className="flex flex-row items-center gap-4 p-3">{props.children}</div>
    </div>
  );
};

export const Component: FC = () => {
  return (
    <main className="container mx-auto max-w-screen-lg">
      <header className="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="components" className="font-bold text-xl lg:text-2xl select-none">
          Components
        </h1>
      </header>

      <main className="space-y-8 xl:space-y-12 p-4 sm:p-5 md:p-6 lg:p-7">
        <Section title="Badge">
          <Section.Sub title="Color">
            <Badge color="neutral">neutral</Badge>
            <Badge color="primary">primary</Badge>
          </Section.Sub>

          <Section.Sub title="Size">
            <Badge size="sm">small</Badge>
            <Badge size="md">medium</Badge>
            <Badge size="lg">large</Badge>
          </Section.Sub>

          <Section.Sub title="Icon">
            <Badge>
              <PlusIcon className="size-3" />
              left
            </Badge>
            <Badge>
              right
              <PlusIcon className="size-3" />
            </Badge>
          </Section.Sub>
        </Section>

        <Section title="Button">
          <Section.Sub title="Color">
            <Button color="neutral">neutral</Button>
            <Button color="primary">primary</Button>
          </Section.Sub>

          <Section.Sub title="Size">
            <Button size="sm">small</Button>
            <Button size="md">medium</Button>
            <Button size="lg">large</Button>
          </Section.Sub>

          <Section.Sub title="Icon">
            <Button>
              <PlusIcon />
              left
            </Button>
            <Button>
              right
              <PlusIcon />
            </Button>
          </Section.Sub>

          <Section.Sub title="State">
            <Button disabled>disabled</Button>
          </Section.Sub>
        </Section>

        <Section title="IconButton">
          <Section.Sub title="Color">
            <IconButton color="neutral">
              <RocketIcon />
            </IconButton>
            <IconButton color="primary">
              <RocketIcon />
            </IconButton>
          </Section.Sub>

          <Section.Sub title="Size">
            <IconButton size="sm">
              <RocketIcon className="size-3" />
            </IconButton>
            <IconButton size="md">
              <RocketIcon className="size-4" />
            </IconButton>
            <IconButton size="lg">
              <RocketIcon className="size-5" />
            </IconButton>
          </Section.Sub>

          <Section.Sub title="State">
            <IconButton disabled>
              <RocketIcon />
            </IconButton>
          </Section.Sub>
        </Section>
      </main>
    </main>
  );
};

if (import.meta.env.DEV) Component.displayName = "components.page";
