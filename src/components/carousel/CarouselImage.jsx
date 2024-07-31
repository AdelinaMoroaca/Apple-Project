import React from 'react';

function ExampleCarouselImage({ text, imageSrc }) {
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

// import React from 'react';

// function ExampleCarouselImage({ text, imageSrc }) {
//   return (
//     <div style={{ 
//         position: 'relative', 
//         width: '100%', 
//         height: '100%',
//         paddingBottom: '125%', // 1186 / 548 * 100 to maintain aspect ratio
//         overflow: 'hidden',
//         backgroundColor: 'blue',
//       }}>
//       <img 
//         src={imageSrc} 
//         alt={text} 
//         style={{ 
//           position: 'absolute', 
//           top: '0', 
//           left: '0',
//           width: '100%', 
//           height: '100%', 
//           objectFit: 'cover',
//         }} 
//       />
//       <div style={{ 
//         position: 'absolute', 
//         bottom: 0,
//         left: 0,
//         width: '100%', 
//         color: 'white', 
//         textAlign: 'center', 
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: '10px'
//         }}>
//         <h3>{text}</h3>
//       </div>
//     </div>
//   );
// }

// export default ExampleCarouselImage;

