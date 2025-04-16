import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";

import { loader as HomeLoader } from "./pages/Home";
import { axiosReq } from "./utils";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home />, loader: HomeLoader },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader: async ({ params }) => {
            const res = await axiosReq(`/product/${params.id}`);
            return res.data;
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
