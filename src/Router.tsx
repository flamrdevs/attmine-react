import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    lazy: () => import("~/Root.tsx"),
    children: [
      {
        index: true,
        lazy: () => import("~/routes/index.page.tsx"),
      },
      {
        path: "dash",
        lazy: () => import("~/routes/dash.layout.tsx"),
        children: [
          {
            index: true,
            lazy: () => import("~/routes/dash.index.page.tsx"),
          },
        ],
      },
      {
        path: "components",
        lazy: () => import("~/routes/components.page.tsx"),
      },
      {
        path: "*",
        lazy: () => import("~/routes/404.page.tsx"),
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
