import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage'; // Adjust the import path as needed

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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/appleVisionPro.JPG" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/appleStores.JPG" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
          text="" 
          imageSrc="images/HomePage/Carusel/iPhone16.JPG" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
