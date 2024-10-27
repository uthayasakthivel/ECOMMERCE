import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import "./index.css";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: "/contact", element: <Contact /> },
      // { path: "/about", element: <About /> },
      // { path: "/signup", element: <SignUp /> },
    ],
  },
  // {
  //   path: "/shop_now",
  //   element: <Shopping />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
