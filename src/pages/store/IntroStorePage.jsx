import React from "react";
import { Container, Card } from 'react-bootstrap';

import { useSelector } from "react-redux";
//unpdate firebase

import { selectCategoriesMap } from "../../store/categories/category.selector";
import styles from './IntroStorePage.module.css'; 

function IntroStorePage({title}) {
    const categoriesMap = useSelector(selectCategoriesMap);

    return(
        <Container className={styles.introContainer}>

            {Object.keys(categoriesMap)        
                .filter(categoryTitle => categoryTitle === title)
                .map((categoryTitle) => (
                <Card key={title} className={styles.cardPresentation}>
                    <Card.Body className={styles.cardInfo}>
                        <Card.Title className={styles.cardTitle}>
                            <h1 className={styles.title}><b>Shop {categoryTitle} for Education</b></h1>                        
                        </Card.Title>

                        <div>
                            <Card.Text className={styles.productMotto}>
                                <p className={styles.motto}><b>Need shopping help?</b></p>
                                <p className={styles.motto}><b>Ask an {categoryTitle} Specialist</b></p>
                            </Card.Text>
                            <Card.Text className={styles.productMotto}>
                                <p className={styles.motto}><b>Visit an Apple Store</b></p>
                                <p className={styles.motto}><b>Find one near you</b></p>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}
export { IntroStorePage };
