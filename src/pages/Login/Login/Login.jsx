import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const { LogIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const from = location.state?.from?.pathname || '/category/0'

    const handelLogIn = event =>{
        event.preventDefault();
        console.log(event)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);

        LogIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            Navigate(from);

        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <Container className='d-flex justify-content-center align-items-center mt-5 w-50 pt-5 shadow p-3 mb-5 bg-white rounded'>
            <Form onSubmit={handelLogIn} style={{ width: '50%' }}>
            <h3>Please LogIn</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='font-weight-bold'>Email address</Form.Label>
                    <Form.Control className='bg-light' type="email" name='email' placeholder="Enter email" required />
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
                        Don't have an Account <Link to='/register'>Register</Link>
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

export default Login;