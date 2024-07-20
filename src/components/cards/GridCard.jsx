import React from "react";
import Card from 'react-bootstrap/Card';
import styles from "./GridCard.module.css";

function GridCard(props) {
    const { src, title, firstText, secondText, btn, rightBtn } = props;
  
    return (
      <Card className={styles.cardContainer}>
        <img 
          src={src}
          alt="Background"
          className={styles.backgroundImage}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          
          <div>
          <Card.Text className={styles.cardText}>{firstText}</Card.Text>
          </div>
          <Card.Text className={styles.cardText}>{secondText}</Card.Text>
  
          <div className={styles.btnContainer}>
            {btn}
            <span>{rightBtn}</span>
          </div>
         
        </Card.Body>
      </Card>
    );
}


export { GridCard };