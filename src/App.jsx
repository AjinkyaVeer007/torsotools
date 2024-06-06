import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./herosections/LandingPage";
import ProductDescription from "./herosections/ProductDescription";
import ProductDetails from "./herosections/ProductDetails";

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
          path: "product-details/:prodId",
          element: <ProductDescription />,
        },
        {
          path: "product-details/info/:prodId",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
