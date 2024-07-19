import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {

    const [formValues, setFormValues] = useState({
        email:"",
        password:""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(' working', event)
        if(formValues.email.includes('test@gmail.com') && 
        formValues.password.includes('test')){
            console.log(' working')
        } else {

            console.log(' not working')
        }
    }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
            placeholder="Enter email"
            formValues={formValues.email}
            onChange={(e) => {
                setFormValues({
                    ...formValues,
                    email:e.target.value
                })
            }}
            />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Password" 
            formValues={formValues.password}
            onChange={(e) => {
                setFormValues({
                    ...formValues,
                    email:e.target.value
                })
            }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;