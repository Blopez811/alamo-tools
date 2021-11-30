import React from "react";
import { Card, Button } from 'react-bootstrap';

function Tool(item) {
    const {
        image,
        name,
        _id,
        price,
        quantity,
        description
      } = item;

      return (
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`../../images/${image}`}/>
                <Card.Body>
                    <Card.Title class='category-names'>{name}</Card.Title>
                    <Card.Text>
                        {description} <br/> Price: {price} <br/> Quantity: {quantity}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
      )
};

export default Tool;