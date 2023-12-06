import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";

import AppliedJobs from "./AppliedJobs";
import Statistics from "./Statistics";
import Blogs from "./Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/src/data/categories.json"),
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "job/:id",
        element: <Statistics></Statistics>,
      },
      {
        path: "Blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
