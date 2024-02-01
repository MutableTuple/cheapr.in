import React from "react";
import Navbar from "./components/Navbar.component";
import Hero from "./components/Hero.component";
import ProductsGoods from "./components/ProductsGoods.component";
import ProductsCourses from "./components/ProductsCourses.component";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsGoods />
      <ProductsCourses />
    </div>
  );
};

export default App;
