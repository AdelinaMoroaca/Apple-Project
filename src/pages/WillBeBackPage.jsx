import React from "react";
import Container from 'react-bootstrap/Container';
import styles from './WillBeBackPage.module.css'

function WillBeBackPage(props){
    const { pageContent } = props;
    return(
        <div className={styles.WillBeBackPage}>
        <Container className={styles.Container}>
            <h3 className={styles.logo}>LOGO</h3>
            <h1 className={styles.title}>We'll be back.</h1>
            <h6 className={styles.para}>We're busy updating the</h6>
            <h3 className={styles.topic}>{pageContent} website</h3>
            <h6 className={styles.secondPara}>and will be back soon</h6>
        </Container>
        </div>

    )
}

export default WillBeBackPage;