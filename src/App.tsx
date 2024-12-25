import React from "react";
import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./global.scss";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Card />
      <Footer />
    </>
  );
};

export default App;
