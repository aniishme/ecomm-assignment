import React from "react";

function CartItem({ item }) {
  return (
    <div className="cart_item_wrapper">
      <img src={item.image}></img>
      <h4 className="title">{item.title}</h4>
      <h4>{item.count}</h4>
      <h4>${item.count * item.price}</h4>
    </div>
  );
}

export default CartItem;
