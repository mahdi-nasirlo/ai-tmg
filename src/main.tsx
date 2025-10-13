import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./assets/index.css";
import Home from "./pages/home";
import ServiceDetail from "./pages/ServiceDetail";

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
