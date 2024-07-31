import React from "react";
import {Card } from 'react-bootstrap';
import styles from "./GridCard.module.css";

function GridCard(props) {
    const { src, title, firstText, secondText, leftBtn, rightBtn, whiteText  } = props;
  
    return (
      <Card className={`${styles.cardContainer} ${whiteText ? styles.whiteText : ''}`}>
        <img 
          src={src}
          alt="Background"
          className={styles.backgroundImage}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}><h3><b>{title}</b></h3></Card.Title>
          
          <div>
            <Card.Text className={styles.firstText}><p>{firstText}</p></Card.Text>
            <Card.Text className={styles.secondText}><p>{secondText}</p></Card.Text>
          </div>
  
          <div className={styles.btnContainer}>
            {leftBtn}
            <span>{rightBtn}</span>
          </div>
         
        </Card.Body>
      </Card>
  

    );
}


export { GridCard };