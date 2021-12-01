import React from "react";
import { Card, Button } from 'react-bootstrap';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';



function Tool(item) {
    const {
        image,
        name,
        _id,
        price,
        quantity,
        description
    } = item;

    const [state, dispatch] = useStoreContext();

    const { cart } = state

    const addToCart = () => {
        // find the cart item with the matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
      
        // if there was a match, call UPDATE with a new purchase quantity
        if (itemInCart) {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: _id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
          });
        } else {
          dispatch({
            type: ADD_TO_CART,
            product: { ...item, purchaseQuantity: 1 }
          });
        }
      };



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/images/${image}`} />
            <Card.Body>
                <Card.Title class='category-names'>{name}</Card.Title>
                <Card.Text>
                    {description} <br /> Price: {price} <br /> Quantity: {quantity}
                </Card.Text>
                <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
};

export default Tool;