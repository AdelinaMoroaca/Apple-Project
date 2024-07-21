import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AuthenticationContext} from '../store/Authentication/context';

function HeaderBlack() {
  const { user, setUser } = useContext(AuthenticationContext);

  const logoutUser = () => {
    setUser(null);
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">LOGO-Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/iphone">iPhone</Nav.Link>
            <Nav.Link as={Link} to="/mac">Mac</Nav.Link>
            <Nav.Link as={Link} to="/ipad">iPad</Nav.Link>
            <Nav.Link as={Link} to="/watch">Watch</Nav.Link>
            <Nav.Link as={Link} to="/vision">Vision</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart-Icon</Nav.Link>
            <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser}>
              {user ? 'SignOut' : 'SignIn'}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

function HeaderWhite() {
    const { user, setUser } = useContext(AuthenticationContext);
    const logoutUser = () => {
      setUser(null);
    }
    return (
  
         
        <Navbar bg="light" data-bs-theme="light">
          <Container>
          <Navbar.Brand as={Link} to="/">LOGO-Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> 
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/iphone">iPhone</Nav.Link>
            <Nav.Link as={Link} to="/mac">Mac</Nav.Link>
            <Nav.Link as={Link} to="/ipad">iPad</Nav.Link>
            <Nav.Link as={Link} to="/watch">Watch</Nav.Link>
            <Nav.Link as={Link} to="/vision">Vision</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart-Icon</Nav.Link>
            <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser}>
              {user ? 'SignOut' : 'SignIn'}
            </Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    
    );
  }

export { HeaderBlack, HeaderWhite };