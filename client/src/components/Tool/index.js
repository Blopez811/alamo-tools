import React from "react";
import { Card, Button } from 'react-bootstrap';

function Tool(item) {
    const {
        image,
        name,
        _id,
        price,
        quantity
      } = item;

      return (
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/Lawn&Garden.png' />
                <Card.Body>
                    <Card.Title class='category-names'>Name of Tool</Card.Title>
                    <Card.Text>
                        Price <br/> Quantity
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
      )
};

export default Tool;