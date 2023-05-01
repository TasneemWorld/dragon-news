import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center mt-5 w-50 pt-5 shadow p-3 mb-5 bg-white rounded'>
            <Form style={{ width: '50%' }}>
                <h3>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='font-weight-bold'>Name</Form.Label>
                    <Form.Control className='bg-light' type="text" name='name' placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='font-weight-bold'>Photo URL</Form.Label>
                    <Form.Control className='bg-light' type="text" name='photo' placeholder="Enter Photo-Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='font-weight-bold'>Email address</Form.Label>
                    <Form.Control className='bg-light' type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='font-weight-bold'>Password</Form.Label>
                    <Form.Control className='bg-light' type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="" className='mb-3 w-100 bg-dark text-white' type="submit">
                    Submit
                </Button>

                <Form.Group className='pb-4'>
                    <Form.Text>
                        Already have an Account <Link to='/login'>LogIn</Link>
                    </Form.Text>
                    <Form.Text className="text-danger mt-4">
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                    <Form.Text className="text-success mt-4">
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

            </Form>
        </Container>
    );
};

export default Register;