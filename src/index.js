import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Pages/Home.js";
import Layout from "./Layout";
import About, { gitHubInfoData } from "./components/Pages/About.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Currency from "./components/Pages/Currency.js";
import MultiPageForm from "./components/Pages/MultiPageForm.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//         loader : ({gitHubInfoData})
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route  path="" element={<Home/>} />
      <Route  path="currencyCovertor" element={<Currency/>} />
      <Route  path="multiPageForm" element={<MultiPageForm/>} />
      <Route  path="about" loader={gitHubInfoData} element={<About/>} />
    </Route>
    )

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
