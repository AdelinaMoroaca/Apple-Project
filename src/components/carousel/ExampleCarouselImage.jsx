import React from 'react';

function CarouselImage() {
  const imgStyle= {
    width: '100%',
    height: '250px',
    background: 'lightgray',
    display: 'flex',
    alignItems: 'center',

    // height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', 
    justifyContent: 'center'
// width='100%' height='250px'
  }
  return (
  
    <div style={imgStyle}>
      
      {/* Add your image logic here */}
      <img width='100%' height='250px' src="/images/iPhone/15Pro/15pro-5.JPG" alt="" />

    </div>
  );
}

export default CarouselImage;
