import React from "react";
import Card from 'react-bootstrap/Card';
import styles from "./GridCard.module.css";
// import { ToggleTheme } from '../demoComponents/ToggleTheme' - de sters
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

function Banner(props){
    const { title, image, imgDescription} = props;

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
   
        border: '1px solid gray',
        width: '100%',
        height: '600px',
        // backgroundColor: 'blue',

    }

    return(
        <div style={ style }>
            {/* <ToggleTheme/> */}
            {/* <ToggleVisibility/> */}
         
         
            <img src={image} alt={imgDescription} />
            <p>{title}</p>
        </div>
    )
}

export { GridCard , Banner};