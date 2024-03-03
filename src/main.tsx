import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "~/styles/globals.ts";

import App from "~/App.tsx";

import { init } from "~/store/theme.ts";

init();

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
