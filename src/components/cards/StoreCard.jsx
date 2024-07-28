import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import styles from './StoreCard.module.css';


function StoreCard(props) {
  const { src, giftValue, title, fullPrice, monthlyPrice } = props;

  return (
    // <Card style={{ width: '25rem' }}>
    //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //   <Card.Body>
    //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //         <Card.Text>GET A $150 GIFT CARD</Card.Text>
    //         <Spinner animation="grow" variant="warning" />
    //     </div>
    //     <Card.Title>MacBook Air</Card.Title>
    //     <Card.Text>
    //     From $899 or $74.91/mo.per month for 12 mo.monthsFootnote† with education savings
    //     </Card.Text>
    //     <Card.Img variant="top" src="images/StorePage/store-card.JPG" />
    //   </Card.Body>
    // </Card>

    <Card className={styles.storeCardLayout} >

      <Card.Img 
        // variant="top" 
        src={src} 
        className={styles.storeImg} 
      />
      <Card.Body style={{ padding:'0rem' }}>
        <div className={styles.giftCard}>
          <h3 style={{fontSize:'0.8rem', margin: '0', paddingRight: '0.6rem' }}>GET A {giftValue} GIFT CARD</h3>

          <Spinner style={{ width: '1rem', height: '1rem' }} animation="grow" variant="success" />
        </div>

        <Card.Title className={styles.storeCardTitle}>{title}</Card.Title>


        <Card.Text className={styles.storeCardText}>
          <p>From {fullPrice} or {monthlyPrice} for 12 mo.</p>
          <p>with education savings</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StoreCard;