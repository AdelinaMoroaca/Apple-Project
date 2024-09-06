import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import styles from './WillBeBackPage.module.css'

function WillBeBackPage(props){
    const { pageContent } = props;
    return(
        <div className={styles.WillBeBackPage}>
            <Container className={styles.Container}>
                <span className={styles.logo}>              
                    <FontAwesomeIcon icon={faApple} style={{width: '4rem', height: '4rem', color: 'black'}} fluid/>
                </span>
                <h1 className={styles.title}>We'll be back.</h1>
                <h6 className={styles.para}>We're busy updating the</h6>
                <h3 className={styles.topic}>{pageContent} website</h3>
                <h6 className={styles.secondPara}>and will be back soon</h6>
            </Container>
        </div>
    )
}

export default WillBeBackPage;