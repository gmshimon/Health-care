import React from 'react';
import {Card} from 'react-bootstrap';

const Service = (props) => {
    const {serviceName, image, description} = (props.service);
    console.log(serviceName, image, description)
    return (
        <div className="col-4">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;