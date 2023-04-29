import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const {user} = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex">
                            <Link className='text-decoration-none text-muted mx-2' to='/'>Home</Link>
                            <Link className='text-decoration-none text-muted mx-2' to='/career'>Career</Link>
                            <Link className='text-decoration-none text-muted mx-2' to='/best-news'>Best News</Link>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ? <Button variant="dark">LogOut</Button> :
                                    <Link to='/login'><Button variant="dark">LogIn</Button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;