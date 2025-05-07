import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";
import ErrorPages from "./pages/ErrorPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPages />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
