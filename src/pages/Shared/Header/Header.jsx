import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    // const {user} = useContext(AuthContext)
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="newspaper logo" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex p-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-bold fs-5' speed={70}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex">
                            <Link className='text-decoration-none mx-2' to='/'>Home</Link>
                            <Link className='text-decoration-none mx-2' to='/career'>Career</Link>
                            <Link className='text-decoration-none mx-2' to='/best-news'>Best News</Link>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                               {user ? <Button variant="dark">LogOut</Button> :
                                <Button variant="dark">LogIn</Button>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;