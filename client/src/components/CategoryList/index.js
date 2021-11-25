import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CategoryList = () => {
    const categoryCategory = 'not sure what I need yet a la verga tilin';

    return (
        <div>
            <h1>RENTAL EQUIPMENT</h1>
            <div>
            <h3>Select a category below to view rental equipment information or to reserve equipment for your jobsite.</h3>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/Lawn&Garden.png' />
                <Card.Body>
                    <Card.Title>Lawn & Garden</Card.Title>
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
                    <Card.Title>Air Compressors & Tools</Card.Title>
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
                    <Card.Title>Concrete & Masonry</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )


};

export default CategoryList