// router-dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayiut from "./layouts/MainLayiut";

// pages
import Home from "./pages/Home";
import Interesting from "./pages/Interesting";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayiut />,
      children: [
        { index: true, element: <Home />, path: "/home" },
        // { path: "/interesting", element: <Interesting /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
