import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Home from "./Pages/home";
import ServiceDetail from "./Pages/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service/:service",
    element: <ServiceDetail />,
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
