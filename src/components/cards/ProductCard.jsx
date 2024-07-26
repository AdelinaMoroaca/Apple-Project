import React from 'react';
import { Card, Carousel, Button, Col, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './../carousel/ExampleCarouselImage';

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

    //varianta pen-final
    // <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
    //     <Card style={{ width: '100%'}}>
    //         <Card.Body style={{  gap: '1rem', display: 'flex', justifyContent: 'space-between' }}>
    //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <Carousel>
    //                 <Carousel.Item>
    //                     <CarouselImage 
    //                         text="First slide" 
    //                         // style={{ height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    //                         />
    //                     <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item>

    //                 <Carousel.Item>
    //                     <CarouselImage 
    //                     style={{ height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    //                     text="Second slide" />
    //                     <Carousel.Caption>
    //                     <h3>Second slide label</h3>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item>
    //                 {/* <Carousel.Item>
    //                     <CarouselImage text="Third slide" />
    //                     <Carousel.Caption>
    //                     <h3>Third slide label</h3>
    //                     <p>
    //                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //                     </p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item> */}
    //             </Carousel>
    //         </div>

    //         <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //                 Some quick example text to build on the card title and make up the
    //                 bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //         </div>
    //             {/* <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //             Some quick example text to build on the card title and make up the
    //             bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button> */}
    //         </Card.Body>
    // </Card>  
    // </Col>


    // varianta first Demo
    // <Card style={{ width: '28rem'}}>
    //     <Card.Body style={{  gap: '1rem', display: 'flex', justifyContent: 'space-between' }}>
    //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <Carousel>
    //                 <Carousel.Item>
    //                     <CarouselImage 
    //                         text="First slide" 
    //                         // style={{ height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    //                         />
    //                     <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item>

    //                 <Carousel.Item>
    //                     <CarouselImage 
    //                     style={{ height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    //                     text="Second slide" />
    //                     <Carousel.Caption>
    //                     <h3>Second slide label</h3>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item>
    //                 {/* <Carousel.Item>
    //                     <CarouselImage text="Third slide" />
    //                     <Carousel.Caption>
    //                     <h3>Third slide label</h3>
    //                     <p>
    //                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //                     </p>
    //                     </Carousel.Caption>
    //                 </Carousel.Item> */}
    //             </Carousel>
    //         </div>

    //         <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //                 Some quick example text to build on the card title and make up the
    //                 bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //         </div>
    //             {/* <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //             Some quick example text to build on the card title and make up the
    //             bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button> */}
    //   </Card.Body>
    // </Card>
  );
}

export default ProductCard;