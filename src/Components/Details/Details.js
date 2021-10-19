import React from 'react';
import {Button, Card, ListGroup, ListGroupItem, Spinner} from 'react-bootstrap';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import LoadData from '../../LoadData/LoadData';

const Details = () => {
    //getting the id of the service from the dynamic route
    const {id} = useParams();
    //load all services
    const [services, loading] = LoadData();

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    //string to integer
    const idNum = parseInt(id);
    console.log(typeof id)

    //matching the service with the id
    const service = services.find(service => service.id === idNum);

    const {serviceName, description, image, instructor, price} = service;
    console.log(serviceName, description);
    return (
        <div>
            <Card className="mx-auto" style={{width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <span className="fw-bold">Instructor:</span>{instructor}</ListGroupItem>
                    <ListGroupItem>price:{price}</ListGroupItem>
                    <ListGroupItem>
                        <Link to="/home">
                            <Button variant="primary">Home page</Button>
                        </Link>
                    </ListGroupItem>
                </ListGroup>

            </Card>
        </div>
    );
};

export default Details;