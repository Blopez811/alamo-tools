import React from 'react';
import { Card, Button } from 'react-bootstrap';
import loginPage from '../../pages/Login';
import { Link } from "react-router-dom";
import airTools from '../../images/Air Tools.png'
import concreteTools from '../../images/Concrete & Masonry.png'
import pumpsPhoto from '../../images/10.png';

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
            <div class='hero-pad'>
            <h3 class='hero-text card-body'>Select a category below to view rental equipment information, availability, and locations to reserve items for your jobsite. Instructions for pickup will follow.</h3>
            </div>
            <div class='row'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/Lawn&Garden.png' />
                <Card.Body>
                    <Card.Title class='category-names'>LAWN & GARDEN</Card.Title>
                    <Card.Text>
                       Tools for maintenance of lawns, hedges, or brush. For Home or Commercial projects. Chainsaws, Mowers, Post Diggers and more.
                    </Card.Text>
                    <Link to={`/single-category/61a57a32ec2d3775db3263dc`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { airTools } />
                
                <Card.Body>
                    <Card.Title class='category-names'>AIR COMPRESSORS & TOOLS</Card.Title>
                    <Card.Text>
                        Top of the line Air Compressors, Sand Blasters, Air Powered Rivet Busters, and Air Hammers for DIY or commercial. 
                    </Card.Text>
                    <Link to={`/single-category/61a57a32ec2d3775db3263dd`}>
                    <Button variant="primary" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
                
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { concreteTools } />
                <Card.Body>
                    <Card.Title class='category-names'>CONCRETE & MASONRY</Card.Title>
                    <Card.Text>
                     Home to Medium sized Commercial projects. Tools for prepping and pouring cement, along with masonry. 
                    </Card.Text>
                    <Link to={`/single-category/61a57a32ec2d3775db3263de`}>
                    <Button variant="primary bottom" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ pumpsPhoto } />
                <Card.Body>
                    <Card.Title class='category-names'>PUMPS</Card.Title>
                    <Card.Text>
                        Pumps and accessories for Home and Commercial applications. We offer Gas and Electric options, along with accessories and Test Pumps. 
                    </Card.Text>
                    <Link to={`/single-category/61a57a32ec2d3775db3263df`}>
                    <Button variant="primary bottom" onClick={displayCategory}>Check Availability</Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )


};

export default CategoryList