import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Basket from "./components/Basket";
import Card from "./components/Card";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "card", element: <Card /> },
        { path: "basket", element: <Basket /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
