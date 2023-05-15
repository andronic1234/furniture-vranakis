import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorBoundary, Navbar } from "./components";

import "./assets/index.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ErrorPage = lazy(() => import("./pages/errorPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    // Pages are Nested inside the Navbar component
    <Route path="/" element={<Navbar />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="*"
        element={<ErrorPage />}
        errorElement={<ErrorPage />}
        loader={async () => {
          throw new Response("Not Found", { status: 404 });
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
