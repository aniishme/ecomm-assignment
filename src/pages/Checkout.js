import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Checkout() {
  const history = useHistory();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setCart(cartItems ? cartItems : []);
  }, []);
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemTotal = item.count * item.price;
      total = total + itemTotal;
    });
    return total;
  };
  const onCheckout = () => {
    alert(
      "Thank You for placing your order \n Your order will be delivered soon"
    );
    localStorage.removeItem("cart");
    history.push("/");
  };
  return (
    <div className="checkout_wrapper">
      <div className="billing_form">
        Personal Information
        <br />
        <input
          type="text"
          name="fullname"
          placeholder="Enter your full name"
          style={{ marginRight: "15px" }}
        />
        <input type="email" name="email" placeholder="Enter your Email" />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter your current address"
          style={{ marginRight: "15px" }}
        />
        <input type="text" name="phone" placeholder="Enter your phone number" />
        <br />
        <br />
        Payment Information
        <br />
        <input
          type="text"
          name="card"
          placeholder="Enter your card number"
          style={{ marginRight: "15px" }}
        />
        <input type="email" name="email" placeholder="Enter your CVV" />
        <br />
        <br />
        <input
          type="date"
          name="address"
          placeholder="Enter card expiry date"
        />
      </div>
      <br />
      Products Detail
      <br />
      <div className="checkout_products">
        {cart.map((item) => {
          return (
            <p key={item.id}>
              {item.title} x {item.count}
            </p>
          );
        })}
      </div>
      <div className="payment_information">
        <h4>Total Cost: ${calculateTotal()}</h4>
        <Button onClick={onCheckout}>Place Your Order</Button>
      </div>
    </div>
  );
}

export default Checkout;
