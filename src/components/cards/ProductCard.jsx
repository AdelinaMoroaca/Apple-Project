import React from 'react';
import { Card, Carousel, Button, Col, Row } from 'react-bootstrap';
import CarouselImage from '../carousel/CarouselImage';

function ProductCard() {
// const { title } = props;
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Row>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Carousel>
                <Carousel.Item>
                  <CarouselImage text="First slide" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <CarouselImage text="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default ProductCard;