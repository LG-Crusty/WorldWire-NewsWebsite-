import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import App from "@/App.jsx";
import Layout from "@/layouts/layout";

const Routing = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "home",
        Component: Layout,
        children: [
          {
            index: true,
            Component: Home,
          },
        ],
      },
    ],
  },
]);

export default Routing;
