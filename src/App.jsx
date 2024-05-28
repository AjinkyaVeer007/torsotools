import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./herosections/LandingPage";
import ProductDescription from "./herosections/ProductDescription";
import AboutUs from "./components/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "product-details",
          element: <ProductDescription />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
