import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {

    // const {user} = useContext(AuthContext)

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
            
        </Container>
    );
};

export default Header;