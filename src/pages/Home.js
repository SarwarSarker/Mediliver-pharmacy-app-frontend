import React from "react";
import Products from "../components/Products";
import Service from "../components/Service";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Service />
      <Products />
    </>
  );
};

export default Home;
