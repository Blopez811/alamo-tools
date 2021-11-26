import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CategoryList = () => {
    const categoryCategory = 'not sure what I need yet a la verga tilin';

    return (
        <div>
          <div class='home-text'>
            <h1 class='card-header'>RENTAL EQUIPMENT</h1>
            <div>
            <h3 class='hero-text'>Select a category below to view rental equipment information or to reserve equipment for your jobsite.</h3>
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
                    <Button variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../images/Air Tools.png" />
                <Card.Body>
                    <Card.Title class='category-names'>AIR COMPRESSORS & TOOLS</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../images/Concrete & Masonry.png" />
                <Card.Body>
                    <Card.Title class='category-names'>CONCRETE & MASONRY</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../images/Concrete & Masonry.png" />
                <Card.Body>
                    <Card.Title class='category-names'>MURDER WEAPONS</Card.Title>
                    <Card.Text>
                        Here you'll find rope, duct-tape, gloves, knives, and all the accoutrements of the 
                        Dark Arts
                    </Card.Text>
                    <Button variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )


};

export default CategoryList