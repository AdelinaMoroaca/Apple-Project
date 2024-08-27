import React from "react";
import { Container, Spinner, Card } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';
import styles from './IntroStorePage.module.css'; 

function IntroStorePage({selectedId}) {
    const { data, loading } = useFetchData(
        `https://json-server-deployment-5til.onrender.com/category?categoryProductsId=${selectedId}`
    );

    if (loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        );
    }

    if (!data) return <p>No data</p>;

    const filteredData = selectedId
    ? data.filter(item => item.id === selectedId)
    : data;

    return(
        <Container 
        style={{width: '100vw'}}
        >
                {filteredData.length === 0 ? (
                    <p>No matching data</p>
                ) : (
                    filteredData.map((item, index) => (
                        <Card key={index} className={styles.cardPresentation}>
                            <Card.Body className={styles.cardInfo}>
                                <Card.Title className={styles.cardTitle}>
                                    <h1 className={styles.title}><b>Shop {item.title} for Education</b></h1>                        
                                </Card.Title>

                                <div>
                                    <Card.Text className={styles.productMotto}>
                                        <p className={styles.motto}><b>Need shopping help?</b></p>
                                        <p className={styles.motto}><b>Ask an {item.title} Specialist</b></p>
                                    </Card.Text>
                                    <Card.Text className={styles.productMotto}>
                                        <p className={styles.motto}><b>Visit an Apple Store</b></p>
                                        <p className={styles.motto}><b>Find one near you</b></p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                )}
        </Container>
    )
}

export { IntroStorePage };
