import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import useFirebase from '../../Hooks/UseFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();

    const handleLogout = () => {
        logOut();
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="mb-2" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Fitness-gym</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service">Services</Nav.Link>
                        {/* <Nav.Link to="/home#expert">Experts</Nav.Link> */}
                        {
                            user.email ? <Navbar.Text>
                                Signed in as: {user.displayName}
                                <button className="ms-2" onClick={handleLogout}>Log out</button>
                            </Navbar.Text>
                                :
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
// <Nav.Link as={Link} to="/login">login</Nav.Link>
//                         <Navbar.Text>
//                             Signed in as: <a href="#login">Mark Otto</a>
//                         </Navbar.Text>

export default Header;