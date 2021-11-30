import React from 'react';
import { Card, Button } from 'react-bootstrap';
import loginPage from '../../pages/Login';
import { Link } from "react-router-dom";
import airTools from '../../images/Air Tools.png'
import concreteTools from '../../images/Concrete & Masonry.png'

const CategoryList = () => {
    const categoryCategory = 'not sure what I need yet';
    const displayCategory = () => {
        console.log('displayCategory fired!');
        // render(loginPage)
    }

    return (
        <div>
          <div class='home-text'>
            <h1 class='card-header'>RENTAL EQUIPMENT</h1>
            <div>
            <h3 class='hero-text card-body'>Select a category below to view rental equipment information, availability, and locations to reserve items for your jobsite. Instructions for pickup will follow.</h3>
            </div>
            <div class='row'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/Lawn&Garden.png' />
                <Card.Body>
                    <Card.Title class='category-names'>LAWN & GARDEN</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/single-category/`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { airTools } />
                <Card.Body>
                    <Card.Title class='category-names'>AIR COMPRESSORS & TOOLS</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/single-category`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { concreteTools } />
                <Card.Body>
                    <Card.Title class='category-names'>CONCRETE & MASONRY</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/single-category`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../images/Lawn&Garden.png" />
                <Card.Body>
                    <Card.Title class='category-names'>MURDER WEAPONS</Card.Title>
                    <Card.Text>
                        Here you'll find rope, duct-tape, gloves, knives, and all the accoutrements of the 
                        Dark Arts
                    </Card.Text>
                    <Link to={`/single-category`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )


};

export default CategoryList