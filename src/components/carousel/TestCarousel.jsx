import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsData = [
  {
    title: 'Buy Mac or iPad, get a gift card up to $150.',
    src: '/images/StorePage/main.JPG',
    description: '',
  },
  {
    title: 'MacBook Air',
    src: '/images/StorePage/4.JPG',
    description: 'From $899 or $74.91/mo. for 12 mo. with education savings',
  },
  {
    title: 'iPad Air',
    src: '/images/StorePage/3.JPG',
    description: 'From $549 or $45.75/mo. for 12 mo. with education savings',
  },
  {
    title: 'MacBook Pro',
    src: '/images/StorePage/2.JPG',
    description: 'From $1499 or $124.91/mo. for 12 mo. with education savings',
  },
  // Add more cards as needed
];

const TestCarousel = () => {
  const renderCards = () => {
    return cardsData.map((card, index) => (
      <Card style={{ width: '18rem', margin: '0 10px' }} key={index}>
        <Card.Img variant="top" src={card.src} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>
        Advanced tools for advanced studies.{' '}
        <span>Choose from a best-in-class lineup.</span>
      </h2>
      <Carousel indicators={false} interval={null} controls={true}>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            {renderCards().slice(0, 3)}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            {renderCards().slice(3, 6)}
          </div>
        </Carousel.Item>
        {/* Add more Carousel.Item blocks as needed */}
      </Carousel>
    </section>
  );
};

export default TestCarousel;
;
