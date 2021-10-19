import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {id, serviceName, image, description} = (props.service);
    console.log(serviceName, image, description)
    return (
        <div className="col-lg-4 col-md-6 col-12" id="service">
            <Card className="rounded-3 service-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/details/${id}`}>
                        <Button variant="primary"> <i class="fas fa-info-circle"></i> Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;