import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import styles from "./CardExample.module.css";
// import CardImgOverlay from 'react-bootstrap/CardImgOverlay'


function LargeVideoCard( props ) {
  const { src, title, text, learnMoreBtnText, buyBtnText } = props;
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
        <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button>
        <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button>
      </Card.Body>
    </Card>
  );
}

// LargeImageCard with 1 BTN
function LargeImageCard1(props) {
    const { src, title, text, learnMoreBtnText, buyBtnText, shopBtnText } = props;

    return (
      <Card className={styles.cardContainer}>
        <img 
          src={src}
          alt="Background"
          className={styles.backgroundImage}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          {/* <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button> */}
          {/* <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button> */}
          <Button variant="primary" className={styles.shopBtn}>{shopBtnText}</Button>
        </Card.Body>
      </Card>
    );
}

// LargeImageCard with 2 BTNs
function LargeImageCard2(props) {
  const { src, title, text, learnMoreBtnText, buyBtnText, shopBtnText } = props;

  return (
    <Card className={styles.cardContainer}>
      <img 
        src={src}
        alt="Background"
        className={styles.backgroundImage}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="light" className={styles.learnMoreBtn}>{learnMoreBtnText}</Button>
        <Button variant="primary" className={styles.buyBtn}>{buyBtnText}</Button>
        {/* <Button variant="primary" className={styles.shopBtn}>{shopBtnText}</Button> */}
      </Card.Body>
    </Card>
  );
}


export { LargeImageCard1, LargeImageCard2, LargeVideoCard};