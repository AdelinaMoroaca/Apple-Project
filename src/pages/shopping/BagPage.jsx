import React, { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { Container } from 'react-bootstrap';
// import { BagContext } from '../../store/Shopping/context';
// import { removeFromBag } from '../../store/Shopping/actions';
// import { Table, Row, Col, Button } from 'react-bootstrap';
// import { Btn } from './../../components/buttons/Btn';

//new Bag:
import { BagContext } from '../../store/contexts-D/BagContext';
import Accordion from 'react-bootstrap/Accordion';
import { BtnDemo } from '../../components/buttons/Btn';

import { BagItem } from '../../components/bagItem/BagItem';
import styles from './BagPage.module.css';

function BagPage() {
  const { bagItems, bagTotal } = useContext(BagContext);

  return (
    <Layout bgThemeVariant="light" iconColor="gray">
      <Container style={{ 
        width: '65%',
        padding: '4rem 0', 
        gap: '1.6rem',
        borderBottom: '1px solid gray', 
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{ fontSize: '2.2rem' }}>Your bag total is ${bagTotal}</h2>
        <p style={{ margin: '0rem' }}>Free delivery and free returns.</p>
        <BtnDemo buttonType='check'>Check Out</BtnDemo>
      </Container>

      <Container className={styles.bagContainer}>
        {bagItems.map((cartItem) => (
            <BagItem key={cartItem.id} bagItem={cartItem} />
        ))}
      </Container>

      <Container className={styles.bagDetails}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.subtotal}>Subtotal</span>
            <span className={styles.total}>${bagTotal}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.subtotal}>Shipping</span>
            <span className={styles.total}>FREE</span>
          </div>
        </div>
      </Container>
      
      <Container className={styles.bagTotal}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.total}>Total</span>
            <span className={styles.total}>${bagTotal}</span>
          </div>
          <BtnDemo buttonType='check' style={{ width: '20%', margin: '1rem 0' }}>Check Out</BtnDemo>
      </Container>

      <Accordion defaultActiveKey={null} 
      style={{ 
        width: '65%', 
        padding: '2rem 0' }}>
        {/* Parent Accordion for "Questions About Buying" */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Questions About Buying</Accordion.Header>
          <Accordion.Body>
            {/* Nested Accordion for sub-questions */}
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>When will I get my items?</Accordion.Header>
                <Accordion.Body>
                  By entering a zip code, you’ll get estimated delivery and pickup dates for your items. You’ll get a final delivery date after you place your order. Delivery estimates are based on item availability and the shipping option you choose. For pickup, you’ll choose a pickup date and store during checkout.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I pick up my items at an Apple Store?</Accordion.Header>
                <Accordion.Body>
                  Yes. If you choose pickup, you’ll select a store and a pickup date for your items during checkout. Not all items are available for pickup. We’ll send you a text message when your items are ready for pickup.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>What are my payment options?</Accordion.Header>
                <Accordion.Body>
                We accept Apple Pay(opens in a new window), most credit and debit cards, PayPal, and Apple Store Gift Cards — though PayPal, Apple Store Gift Cards, and financing options may not be available for all products. Financing options are also available to qualifying customers. You can call 1‑800‑MY‑APPLE for more information. Learn more about Apple Payment & Pricing                
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>What are my financing options?</Accordion.Header>
                <Accordion.Body>
                Now you can pay monthly and interest-freeFootnote◊ for eligible items when you choose to check out with Apple Card Monthly Installments. And if you’re buying an iPhone, Mac, iPad, or Apple Watch, you can add a trade-in and pay even less.Footnote◊◊                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>When I buy from apple.com, does my iPhone come ready to use?</Accordion.Header>
                <Accordion.Body>
                  <p>Carrier-connected iPhone SE, iPhone 14, iPhone 15, iPhone 16, and iPhone 16 Pro models will arrive ready to activate with eSIM and can connect to your cellular voice and data service without a physical SIM card.</p>
                  <p>If you completed the steps to authorize activation with AT&T, Boost Mobile, T-Mobile, or Verizon when you purchased your new iPhone online, it will arrive ready to use. Just turn it on and follow the onscreen instructions to set it up and activate with the carrier. To activate with eSIM, you will need Wi-Fi for setup.</p>
                  <p>If you choose "Connect to a carrier later" when you buy your iPhone, you can activate with your service when you receive your device. If you're asked to transfer your SIM, follow the onscreen instructions to transfer service from your previous iPhone. To learn more, visit https://support.apple.com/kb/HT212780 (Opens in a new window) .</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Layout>
  )
}

export default BagPage;
