import React from 'react';

function ExampleCarouselImage(props) {
  const { text, imageSrc } = props;
  return (
    <div style={{ 
        height: '50vw', 
        maxHeight: '500px', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'blue', 
      }}>
      <img 
        src={imageSrc} 
        alt={text} 
        style={{ 
          width: '100%', 
          height: '130%', 
          objectFit: 'cover',
          position: 'absolute', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundPosition: 'top center'
        }} 
      />
      <div style={{ 
        position: 'absolute', 
        bottom: 0,
        left: 0,
        width: '100%', 
        color: 'white', 
        textAlign: 'center', 
        padding: '10px'
        }}>
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default ExampleCarouselImage;
