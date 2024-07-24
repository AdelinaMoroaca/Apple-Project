import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import styles from "./LargeCard.module.css";

function LargeVideoCard( props ) {
  const { src, title, firstParagraph, leftBtn, rightBtn } = props;
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
 
        <Card.Title className={styles.cardTitle}><h2>{title}</h2></Card.Title>
        
        <Card.Text className={styles.firstParagraph}>
          <p>{firstParagraph}</p>
        </Card.Text>

        <div  className={styles.btnContainer}>
            {leftBtn}
            {rightBtn}
        </div>
      </Card.Body>
    </Card>
  );
}

function LargeImageCard(props) {
  const { src, title, firstParagraph, secondParagraph, leftBtn, rightBtn, topBody } = props;

  return (
    <Card className={`${styles.cardContainer} ${topBody ? styles.topBody : ''}`}>
      <img
        src={src}
        alt="Background"
        className={styles.backgroundImage}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title  className={styles.cardTitle}><h2>{title}</h2></Card.Title>
        <Card.Text className={styles.firstParagraph}><p>{firstParagraph}</p></Card.Text>
        <Card.Text  className={styles.secondParagraph}><p>{secondParagraph}</p></Card.Text>

        <div className={styles.btnContainer}>
          {leftBtn}<span>{rightBtn}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export { LargeVideoCard, LargeImageCard };


