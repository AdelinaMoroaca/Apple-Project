// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import styles from "./LargeCard.module.css";
// import CardImgOverlay from 'react-bootstrap/CardImgOverlay'


function LargeVideoCard( props ) {
  const { src, title, text, firstBtnType, secondBtnType } = props;
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log("Attempting to play video");
      videoRef.current.play().catch(error => {
        console.error("Video play was prevented:", error);
      });
    }
  }, []);

  return (
    <Card className={styles.cardContainer}>
      <video 
        ref={videoRef}
        className={styles.backgroundVideo}
        loop
        muted
        playsInline
        autoPlay
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>
          {text}
        </Card.Text>
        <div className={styles.btnContainer}>
            {firstBtnType}
            {secondBtnType}
        </div>
        {/* <Button>{btnType}</Button> */}
        {/* <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button> */}
        {/* <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button> */}
      </Card.Body>
    </Card>
  );
}

// LargeImageCard with 1 BTN
// function LargeImageCard1(props) {
//     const { src, title, text, btnType  } = props;

//     return (
//       <Card className={styles.cardContainer}>
//         <img 
//           src={src}
//           alt="Background"
//           className={styles.backgroundImage}
//         />
//         <Card.Body className={styles.cardBody}>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             {text}
//           </Card.Text>
//           <div>
//         <Button>{btnType}</Button>
      
//         </div>
//           <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button>
//           <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button>
//           <Button variant="primary" className={styles.shopBtn}>{shopBtnText}</Button>
//         </Card.Body>
//       </Card>
//     );
// }

// LargeImageCard with 2 BTNs
// function LargeImageCard2(props) {
//   const { src, title, text, firstBtnType, secondBtnType } = props;

//   return (
//     <Card className={styles.cardContainer}>
//       <img 
//         src={src}
//         alt="Background"
//         className={styles.backgroundImage}
//       />
//       <Card.Body className={styles.cardBody}>
//         <Card.Title className={styles.cardTitle}>{title}</Card.Title>
//         <Card.Text className={styles.cardText}>
//           {text}
//         </Card.Text>

//         <div>
//         <Button >{firstBtnType}</Button>
//         <Button>{secondBtnType}</Button>
//         </div>
//         <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button>
//         <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button>
//         <Button variant="primary" className={styles.shopBtn}>{shopBtnText}</Button>
//       </Card.Body>
//     </Card>
//   );
// }

function LargeImageCard(props) {
  const { src, title, text, btn, rightBtn } = props;

  return (
    <Card className={styles.cardContainer}>
      <img 
        src={src}
        alt="Background"
        className={styles.backgroundImage}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>

        <div className={styles.btnContainer}>{btn}<span>{rightBtn}</span></div>
        {/* <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button> */}
        {/* <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button> */}
        {/* <Button variant="primary" className={styles.shopBtn}>{shopBtnText}</Button> */}
      </Card.Body>
    </Card>
  );
}

export { LargeVideoCard, LargeImageCard };


