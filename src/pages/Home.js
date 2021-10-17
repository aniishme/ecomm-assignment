import React, { useEffect, useState } from "react";

import BannerImage from "../assets/images/banner.png";
import { products } from "../assets/products";
import ProductCard from "../components/ProductCard";

function Landing() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setCart(cartItems ? cartItems : []);
  }, []);

  return (
    <div>
      <img alt="banner" className="banner" src={BannerImage} />
      <div className="card_wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              cart={cart}
              setCart={setCart}
              item={product}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
