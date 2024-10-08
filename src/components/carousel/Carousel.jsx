import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', maxWidth: '800px', margin: '0rem 0rem 1rem 0rem' }}>
      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/appleStore.JPG" 
        />
        <Carousel.Caption>
          <h3>Taste the Apple experience</h3>
          <p>Not just a company,it's a lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/appleVisionPro.JPG" 
        />
        <Carousel.Caption>
          <h3>Taste the Apple experience</h3>
          <p>Not just a company,it's a lifestyle.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/appleStores.JPG" 
        />
        <Carousel.Caption>
          <h3>Taste the Apple experience</h3>
          <p>Not just a company,it's a lifestyle.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/iPhone16.JPG" 
        />
        <Carousel.Caption>
          <h3>Taste the Apple experience</h3>
          <p>Not just a company,it's a lifestyle.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
