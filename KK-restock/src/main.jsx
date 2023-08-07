import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import ErrorPage from "./components/ErrorPage";
import RootLayout from "./routes/RootLayout";




// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path: "/services",
//         element: <Services />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ]
//   },
  
  
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
