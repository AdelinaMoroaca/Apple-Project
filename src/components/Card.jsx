import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import styles from "./CardExample.module.css";
// import CardImgOverlay from 'react-bootstrap/CardImgOverlay'


function LargeVideoCard() {
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
        <source src="/videos/vision.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card.Body className={styles.cardBody}>
        <Card.Title>-LOGO-Vision Pro</Card.Title>
        <Card.Text>
          You've never seen everything like this before.
        </Card.Text>
        <Button variant="light" className={styles.learnMoreBtn}>Learn more</Button>
        <Button variant="primary" className={styles.buyBtn}>Buy</Button>
      </Card.Body>
    </Card>
  );
}

  
function LargeImageCard() {
    return (
      <Card className={styles.cardContainer}>
        <img 
          src="/images/iPhone/15ProMax/15ProMax-1.JPG" // Replace with your image path
          alt="Background"
          className={styles.backgroundImage}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title>-LOGO-Vision Pro</Card.Title>
          <Card.Text>
            You've never seen everything like this before.
          </Card.Text>
          <Button variant="light" className={styles.learnMoreBtn}>Learn more</Button>
          <Button variant="primary" className={styles.buyBtn}>Buy</Button>
        </Card.Body>
      </Card>
    );
  }



export { LargeImageCard, LargeVideoCard};