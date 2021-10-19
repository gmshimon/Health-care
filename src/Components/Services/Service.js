import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Service = (props) => {
    const {id, serviceName, image, description} = (props.service);
    console.log(serviceName, image, description)
    return (
        <div className="col-4" id="service">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/details/${id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;