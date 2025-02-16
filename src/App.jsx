// router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

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
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "interesting", element: <Interesting /> },
        { path: "article", element: <Article /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
