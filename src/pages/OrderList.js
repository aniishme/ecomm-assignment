import React from "react";
import { products } from "../assets/products";
function OrderList() {
  const nameList = ["Anish Sharma", "John Doe", "Jane Doe", "Sanjay Poudel"];
  return (
    <div className="ol_wrapper">
      <div className="ol_heading">
        <h5>S.N</h5>
        <h5></h5>
        <h5>PRODUCT</h5>
        <h5>QTY</h5>
        <h5>COSTUMER</h5>
        <h5>PRICE</h5>
        <h5>Order Id</h5>
      </div>
      {products.slice(0, 5).map((item) => {
        return (
          <div className="ol_item">
            <p>{item.id}</p>
            <img src={item.image} />
            <p className="title">
              {item.title.length < 30
                ? item.title
                : item.title.slice(0, 30) + "..."}
            </p>
            <p>{Math.floor(Math.random() * 5) + 1}</p>
            <p>{nameList[Math.floor(Math.random() * 3)]}</p>
            <p>${item.price}</p>
            <p>
              {"#" +
                Math.floor(Math.random() * 100) +
                "f" +
                Math.floor(Math.random() * 100) +
                "g"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
