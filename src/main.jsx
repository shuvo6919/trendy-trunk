import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Dashboard from "./AdminPages/Dashboard/Dashboard";
import Product from "./AdminPages/Product/Product";
import People from "./AdminPages/People/People";
import MainProvider from "./Provider/MainProvider";
import AddProduct from "./AdminPages/Product/AddProduct/AddProduct";
import ProductDetails from "./AdminPages/ProductDetails/ProductDetails";
import ProductEdit from "./AdminPages/ProductEdit/ProductEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/admin",
    element: <AdminPanel></AdminPanel>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin/products",
        element: <Product></Product>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/admin/products/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/admin/product_details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/admin/product_edit/:id",
        element: <ProductEdit></ProductEdit>,
        loader: ()=>fetch()

        // loader: (params) =>
        //   fetch(`http://localhost:5000/product/${params.params.id}`),
      },
      {
        path: "/admin/peoples",
        element: <People></People>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
