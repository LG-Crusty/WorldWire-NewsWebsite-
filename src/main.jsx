import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// import Routing from "./routes/route";
import Routing from "./routes/route";
import { store } from "./storage/store";
import { Provider } from "react-redux";

// );
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={Routing} />
  </Provider>
);
