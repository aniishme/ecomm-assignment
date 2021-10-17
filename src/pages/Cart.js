import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cart ? cart : []);
  }, []);
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemTotal = item.count * item.price;
      total = total + itemTotal;
    });
    return total;
  };
  return (
    <div className="cart">
      <div
        className="cart_item_wrapper"
        style={{ height: "50px", paddingLeft: "50px" }}
      >
        <h4>Product</h4>
        <h4 className="title">Name</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
      </div>
      {cartItems
        ? cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })
        : "Cart is Empty"}
      <div
        className="cart_item_wrapper"
        style={{ height: "50px", paddingLeft: "50px" }}
      >
        <h4></h4>
        <h4>Total</h4>
        <h4>${calculateTotal()}</h4>
        <Link className="checkout" to="/checkout">
          CHECKOUT
        </Link>
      </div>
    </div>
  );
}

export default Cart;
