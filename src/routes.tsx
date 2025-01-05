import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesUrls } from "./utils/routes-url";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <Home />,
    },
    {
      path: RoutesUrls.ABOUT_URL,
      element: <AboutUs />,
    },
  ];

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
