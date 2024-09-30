import React from 'react';
import Card from 'react-bootstrap/Card';
import { ReactComponent as EducationIcon } from '../../assets/education-hat.svg';
import styles from './StoreCard.module.css';


function StoreCard(props) {
  const { src, giftValue, title, fullPrice } = props;

  return (
    <Card className={styles.storeCardLayout} >

      <Card.Img 
        src={src} 
        className={styles.storeImg} 
      />
      <Card.Body style={{ padding:'0rem' }}>
        <div className={styles.giftCard}>
          <h3 style={{fontSize:'0.8rem', margin: '0', paddingRight: '0.6rem' }}><b>GET A {giftValue} GIFT CARD</b></h3>
          <EducationIcon/>
        </div>

        <Card.Title className={styles.storeCardTitle}>{title}</Card.Title>

        <Card.Text className={styles.storeCardText}>
          From {fullPrice} with education savings
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StoreCard;