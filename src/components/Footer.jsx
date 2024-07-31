import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer(){
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-center">
          <Col md={3} sm={6} xs={12} className="text-center">
            <h6>Shop and Learn</h6>
            <ul className="list-unstyled">
              <li><Link to="/store">Store</Link></li>
              <li><Link to="/mac">Mac</Link></li>
              <li><Link to="/ipad">iPad</Link></li>
              <li><Link to="/iphone">iPhone</Link></li>
              <li><Link to="/watch">Watch</Link></li>
              <li><Link to="/apple-vision-pro">Vision</Link></li>
              <li><Link to="/tv-home">TV & Home</Link></li>
              <li><Link to="/">AirTag</Link></li>
              <li><Link to="/shop/accessories/all">Accessories</Link></li>
              <li><Link to="/">Gift Cards</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="text-center">
            <h6>Apple Store</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Find a Store</Link></li>
              <li><Link to="/">Genius Bar</Link></li>
              <li><Link to="/">Today at Apple</Link></li>
              <li><Link to="/">Group Reservations</Link></li>
              <li><Link to="/">Apple Camp</Link></li>
              <li><Link to="/">Apple Store App</Link></li>
              <li><Link to="/">Certified Refurbished</Link></li>
              <li><Link to="/">Apple Trade In</Link></li>
              <li><Link to="/">Financing</Link></li>
              <li><Link to="/">Carrier Deals at Apple</Link></li>
              <li><Link to="/">Order Status</Link></li>
              <li><Link to="/">Shopping Help</Link></li>  
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="text-center">
            <h6>Apple Values</h6>
            <ul className="list-unstyled">
              <li><Link to="/store">Accessibility</Link></li>
              <li><Link to="/mac">Education</Link></li>
              <li><Link to="/ipad">Environment</Link></li>
              <li><Link to="/iphone">Inclusion and Diversity</Link></li>
              <li><Link to="/store">Privacy</Link></li>
              <li><Link to="/mac">Racial Equity and Justice</Link></li>
              <li><Link to="/ipad">Supply Chain</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12} className="text-center">
            <h6>About Apple</h6>
            <ul className="list-unstyled">
              <li><Link to="/support">Newsroom</Link></li>
              <li><Link to="/warranty">Apple Leadership</Link></li>
              <li><Link to="/returns">Career Opportunities</Link></li>
              <li><Link to="/support">Investors</Link></li>
              <li><Link to="/warranty">Ethics & Compliance</Link></li>
              <li><Link to="/returns">Career Opportunities</Link></li>
              <li><Link to="/support">Events</Link></li>
              <li><Link to="/warranty">Contact Apple</Link></li>
            </ul>
          </Col>

        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>Copyright &copy; {new Date().getFullYear()} Choose Apple by Adelina Moroaca Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export  {Footer};
