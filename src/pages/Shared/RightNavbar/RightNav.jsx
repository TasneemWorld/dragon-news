import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Q-Zone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css'

var sectionStyle = {
    backgroundImage: `url(${bg})`
}

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-3'>LogIn</h4>
            <Button className='mb-2 w-100' variant="outline-primary"> <FaGoogle></FaGoogle> LogIn with Google</Button>
            <Button variant="outline-secondary w-100"> <FaGithub></FaGithub> LogIn with GitHub</Button>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mt-2'> <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mt-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mt-2'> <FaInstagram></FaInstagram>Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="background-image d-flex flex-column justify-content-center align-items-center p-3 text-white">
                <h4 className='mb-3'>create an <br /> Amazing <br /> Newspaper</h4>
                <p className='mb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Danger</Button>
            </div>
        </div>
    );
};

export default RightNav;