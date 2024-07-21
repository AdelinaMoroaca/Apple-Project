import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from "react";
import { LayoutWhite } from '../../components/Layout';
import {AuthenticationContext} from '../../store/Authentication/context';

function LoginForm() {
    const {setUser} = useContext(AuthenticationContext);

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if(formValues.email.includes('adelina@gmail.com') && formValues.password === ('1234')){
            setUser(formValues.email);
            formValues.email = '';
            formValues.password = '';
        } else {
            setUser(null);
            alert('Login failed!');
        }
    }

    return (
            <LayoutWhite>
                <Container>
                    <h1>
                        Sign in for faster checkout.
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <h2>Sign in to Apple Store</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                value={formValues.email}
                                onChange={(event) => {
                                    setFormValues({
                                        ...formValues,
                                        email: event.target.value,
                                    })
                                }}
                                type="email" 
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                value={formValues.password}
                                onChange={(event) => {
                                    setFormValues({
                                        ...formValues,
                                        password: event.target.value,
                                    })
                                }}
                                type="password" 
                                placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </LayoutWhite>
    );
}

export default LoginForm;