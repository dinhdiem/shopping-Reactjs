import React from "react";
import Announcement from "../components/Announcement";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
