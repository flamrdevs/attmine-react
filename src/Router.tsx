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
        path: "*",
        lazy: () => import("~/routes/404.page.tsx"),
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
