import React, { useState, useEffect } from 'react';
import { Container, Spinner, Card } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetchNew';
import styles from './PresentationLargeCard.module.css';

function PresentationLargeCard({ selectedId }) {
    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/category/"
    );

    const [userScroll, setUserScroll] = useState(false);    

    useEffect(() => {
        const handleScroll = (scroll) => {
            const scrollPosition = window.scrollY;
            setUserScroll(scrollPosition > 100)
        }

        //clean mounting
        window.addEventListener('scroll', handleScroll);
    }, [])

    if (loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        );
    }

    if (!data) return <p>No data</p>;



    // const availableIds = data.map(item => item.id);


    const filteredData = selectedId
        ? data.filter(item => item.id === selectedId)
        : data;

    return (
         <Container 
                className={`${styles.containerComponent} ${userScroll ? styles.isScrolled: ''}`}>
                {filteredData.length === 0 ? (
                    <p>No matching data</p>
                ) : (
                    filteredData.map((item, index) => (
                        <Card key={index} className={styles.cardPresentation}>
                            <Card.Body className={styles.cardInfo}>
                                <Card.Title className={styles.cardTitle}>
                                    <h1 className={styles.title}><b>{item.title}</b></h1>                        
                                </Card.Title>

                                <Card.Text className={styles.productMotto}>
                                    <p className={styles.motto}><b>{item.motto}</b></p>
                                </Card.Text>

                            </Card.Body>

                            <video
                                src={item.videoPath}
                                loop
                                muted
                                playsInline
                                autoPlay
                                className={`${styles.productVideo} ${userScroll ? styles.isScrolled: ''}`}
                            >
                                Your browser does not support the video tag.
                            </video>

                        </Card>
                    ))
                )}
        </Container>
    );
}


export default PresentationLargeCard;