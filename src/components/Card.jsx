import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import styles from "./CardExample.module.css";
// import CardImgOverlay from 'react-bootstrap/CardImgOverlay'

function VideoCard() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error("Video play was prevented:", error);
          });
        }
      }, []);

  return (
    <Card className={styles.cardContainder}>
        {/* <video ref={videoRef} width="100%" height="100%" loop muted>
            <source src="/videos/vision.mp4" type="video/mp4" />
        
        </video> */}
     
      <Card.Body >
        <video ref={videoRef}  width= '100%' height='200px' loop muted>
            <source src="/videos/vision.mp4" type="video/mp4" />
        
        </video>
        {/* <Card.Title>-LOGO-Vision Pro</Card.Title>
        <Card.Text>
                    You've never seen everything like this before.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
        <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
  );
}



function ImgOverlayExample() {
    return (
      <Card className={styles.CardContainer}>
        <Card.Img className={styles.Img} src="/images/iPhone/15ProMax/15ProMax-1.JPG" alt="Card image" height='700px'/>
        <Card.ImgOverlay className={styles.ImgOverlay}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          <Button variant="primary">Learn more</Button>
          <Button variant="primary">Buy</Button>
        </Card.ImgOverlay>
      </Card>
    );
  }
  




export { VideoCard , ImgOverlayExample};