import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";

// CLIENT IMPORTS
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./components/ErrorPage";
import ErrorPageAdmin from "./components/ErrorPageAdmin";
import ClientLanding from "./routes/ClientLanding";
import ProductCart from "./routes/ProductCart";
import ClientOrders from "./routes/ClientOrders";
import ClientFavorites from "./routes/ClientFavorites";
import ClientWallet from "./routes/ClientWallet";
import ClientHelp from "./routes/ClientHelp";
import ClientPromotions from "./routes/ClientPromotions";
import ClientBestDeals from "./routes/ClientBestDeals";
import ClientReferrals from "./routes/ClientReferrals";

// ADMIN IMPORTS
import AdminLayout from "./routes/AdminLayout";
import AdminDashboard from "./routes/AdminDashboard";
import AdminOrders from "./routes/AdminOrders";
import AdminProfile from "./routes/AdminProfile";
import AdminTransactions from "./routes/AdminTransactions";
import AdminInventory from "./routes/AdminInventory";
import AdminBranches from "./routes/AdminBranches";
import AdminAddProduct from "./routes/AdminAddProduct";
import AdminEditProduct from "./routes/AdminEditProduct";
import AdminDeleteProduct from "./routes/AdminDeleteProduct";
import AdminFaqs from "./routes/AdminFaqs";
import AdminSignout from "./routes/AdminSignout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ClientLanding />,
      },
      {
        path: "/cart",
        element: <ProductCart />,
      },
      {
        path: "/orders",
        element: <ClientOrders />,
      },
      {
        path: "/favorites",
        element: <ClientFavorites />,
      },
      {
        path: "/wallet",
        element: <ClientWallet />,
      },
      {
        path: "/help",
        element: <ClientHelp />,
      },
      {
        path: "/promotions",
        element: <ClientPromotions />,
      },
      {
        path: "/best-deals",
        element: <ClientBestDeals />,
      },
      {
        path: "/referrals",
        element: <ClientReferrals />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPageAdmin />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/orders",
        element: <AdminOrders />,
      },
      {
        path: "/admin/transactions",
        element: <AdminTransactions />,
      },
      {
        path: "/admin/inventory",
        element: <AdminInventory />,
      },
      {
        path: "/admin/branches",
        element: <AdminBranches />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/add-product",
        element: <AdminAddProduct />,
      },
      {
        path: "/admin/edit-product",
        element: <AdminEditProduct />,
      },
      {
        path: "/admin/delete-product",
        element: <AdminDeleteProduct />,
      },
      {
        path: "/admin/faqs",
        element: <AdminFaqs />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/signout",
        element: <AdminSignout />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
