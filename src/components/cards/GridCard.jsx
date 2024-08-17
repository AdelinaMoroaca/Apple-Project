import React from "react";
import { Card, Image } from 'react-bootstrap';
import { Btn } from './../buttons/Btn';
import { ModalBtn } from './../buttons/ModalBtn';
import styles from "./GridCard.module.css";

function GridCard(props) {
    const { src, logo, title, firstText, secondText, leftBtn, rightBtn, modalBtn, whiteText, extraPadding } = props;

    return (
        <Card className={`${styles.cardContainer} ${whiteText ? styles.whiteText : ''}`}>
            <img 
                src={src}
                alt="Background"
                className={`img-fluid ${styles.backgroundImage}`}
            />
            <Card.Body className={styles.cardBody}>

                <Card.Title className={styles.cardTitle}>

                    <h3><b>               
                       {/* <span> */}
               {logo && (<Image 

                  src="images/AppleLogoBlack.png" 
                  alt="Icon" 
                  logo={logo}
                  className={`img-fluid ${styles.titleIcon}`} 
                  
                  />)
               }
                {title}</b>
                </h3>
                </Card.Title>
                
                <Card.Text className={`${styles.text}`}>
                    <p style={{display: "flex",flexDirection:'column'}} className={`${styles.firstText} ${extraPadding ? styles.extraPadding : ''}`}>
                        {firstText} <span style={{color: 'black'}}>{secondText}</span>
                    </p>
                </Card.Text>
      
                <div className={styles.btnContainer}>
                    {leftBtn && (
                        <Btn 
                            variantType={leftBtn.variantType} 
                            navigatePath={leftBtn.navigatePath} 
                            className={styles.leftButton}
                            btnText={leftBtn.text} 
                        />
                    )}

                    {rightBtn && (
                        <Btn 
                            variantType={rightBtn.variantType} 
                            navigatePath={rightBtn.navigatePath} 
                            className={styles.rightButton}
                            btnText={rightBtn.text} 
                        />
                    )}

                    {modalBtn && (
                        <ModalBtn 
                            variantType={modalBtn.variantType} 
                            src={modalBtn.src} 
                            titleMovie={modalBtn.titleMovie} 
                            className={styles.modalButton}
                            id={modalBtn.id}
                            btnText={modalBtn.text}
                        />
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export { GridCard };
