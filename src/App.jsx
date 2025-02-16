// router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayiut from "./layouts/MainLayiut";

// pages
import Home from "./pages/Home";
import Interesting from "./pages/Interesting";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayiut />,
      children: [
        { index: true, element: <Home />, path: "/home" },
        { path: "/interesting", element: <Interesting /> },
        { path: "/article", element: <Article /> },
        { path: "/contact", element: <Contact /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
