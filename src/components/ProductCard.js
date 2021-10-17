import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ item, setCart, cart }) {
  const addToCart = () => {
    const alreadyExist = cart.find((product) => product.id === item.id);

    if (alreadyExist) {
      const index = cart.indexOf(alreadyExist);
      const newCart = [...cart];
      newCart[index].count = newCart[index].count + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={item.image}
        style={{ width: "100%", height: "180px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>
          {item.title.length > 30
            ? item.title.slice(0, 30) + "..."
            : item.title}
        </Card.Title>
        <Card.Text>{item.description.slice(0, 80) + "... See More"}</Card.Text>
        <Button onClick={addToCart} variant="primary">
          Add to cart ${item.price}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
