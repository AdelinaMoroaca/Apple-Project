import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './StoreCard.module.css';


function StoreCard(props) {
  const { src, giftValue, title, fullPrice, monthlyPrice } = props;

  return (
    <Card className={styles.storeCardLayout} >

      <Card.Img 
        // variant="top" 
        src={src} 
        className={styles.storeImg} 
      />
      <Card.Body style={{ padding:'0rem' }}>
        <div className={styles.giftCard}>
          <h3 style={{fontSize:'0.8rem', margin: '0', paddingRight: '0.6rem' }}><b>GET A {giftValue} GIFT CARD</b></h3>

          <svg role="img" aria-labelledby="edu-savings-svgtxt" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><text id="edu-savings-svgtxt" class="visuallyhidden"></text><g fill="none" fill-rule="evenodd"><path d="m0 0h35v35h-35z"></path><path d="m9 18.7728v5.3914c-.61143092-.6239047-.96802746-1.4535266-1-2.3265v-3.5207l.9272.4224zm11.6159 2.4615c-.9317176.4767769-1.958535.7384363-3.0048.7657l-.0867-.0016-.1354.0016c-1.0447951-.027019-2.0702278-.2880245-3.0008-.7638l-3.5775-1.6346-.8107-.3702v5.8144c2.2405033 1.4045651 4.8550652 2.0948159 7.4969 1.9792h.0063c5.8668 0 9.4968-2.5937 9.4968-5.1873v-3.5218l-.9352.4227zm9.5225-8.0083-9.9422-4.5533c-.8190429-.41572779-1.7197947-.64543162-2.6379-.6727h-.0583-.0582c-.9181305.02731605-1.8189046.25701687-2.638.6727l-9.952 4.5533c-.51552366.213068-.85177474.7158805-.85177474 1.2737s.33625108 1.060632.85177474 1.2737l3.1482 1.4444.1089.05 1.0375.4726 6.3436-3.0725c-.0703139-.1033163-.1101635-.2243204-.115-.3492 0-.4745.5565-.8784 1.3413-1.0437.5168439-.1084009 1.0505561-.1084009 1.5674 0 .7848.1653 1.3413.5692 1.3413 1.0437 0 .6213-.9514 1.125-2.125 1.125-.3450911.0006688-.6885257-.0477151-1.02-.1437l-6.1544 2.9809.9006.4112 3.5778 1.6348c.8004678.4149094 1.6838314.6449257 2.585.6731.037 0 .074-.0004333.111-.0013.0371.0009.074.0013.1111.0013.90122-.0282079 1.7846232-.2582939 2.5851-.6733l5.4522-2.4973 1.2427-.5616.1089-.05 3.1384-1.4443c.5204134-.2086963.8615206-.7130002.8615206-1.2737s-.3411072-1.0650037-.8615206-1.2737zm-21.1384 13.424c-.49597634.057359-.87133619.4755314-.875.9748v3.25c0 .5522847.44771525 1 1 1h.75c.5522847 0 1-.4477153 1-1v-3.25c-.0036638-.4992686-.3790237-.917441-.875-.9748v-1.6042c-.36454924-.2564393-.69988581-.552072-1-.8816z" fill="#08827c" fill-rule="nonzero"></path></g></svg>
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