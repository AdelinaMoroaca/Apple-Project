import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import styles from './BasicEduStoreCard.module.css'

function BasicEduStoreCard(props) {
  const { title, src, width, height, alt } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card variant="primary" 
        onClick={handleShow} 
        className={styles.frontCard}>
        <h1 className={styles.titleCard}><b>{title}</b></h1>

        <Figure className={styles.figureStyle}>
              <Figure.Image
                width={width}
                height={height}
                alt={alt}
                src={src} 
                className={styles.backgroundImage}
              />
        </Figure>
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Mac or iPad, get a gift card up to $150.◊◊◊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
          <Figure.Caption>
              For a limited time, purchase an eligible product and receive a gift card up to $150. Redeem your gift card after purchase for college-ready accessories and more.
              </Figure.Caption>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/images/StorePage/education/Limited-time-offer.JPG" 
                className={styles.roundedImage}
              />
            
            </Figure>
            <Modal.Title>Load up on extracurriculars.</Modal.Title>
            <Modal.Title>More ways to get what you need for college. Only at the Apple Store.</Modal.Title>


            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/images/StorePage/edu-sticker.png"
                className={styles.roundedImage}
              />
              <Figure.Caption>
              Education savings on select Apple products.
              </Figure.Caption>
              <Figure.Caption>
              Mac, iPad, Apple Pencil, and more. Available to new and current college students, as well as faculty and staff.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/images/StorePage/bts-sticker.png" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
              Apple Music Student Plan with free Apple TV+.°‍°
              </Figure.Caption>
              <Figure.Caption>
              All your favorite songs and shows available at a reduced rate.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/images/StorePage/applecare-sticker.png" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
              20% off AppleCare+.°‍°‍°
              </Figure.Caption>
              <Figure.Caption>
              Keep your new Mac or iPad covered with accidental damage protection.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/images/StorePage/bts-sticker.png" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
              Get the Pro Apps Bundle for $199.99 .
              </Figure.Caption>
              <Figure.Caption>
              A collection of industry-leading tools like Final Cut Pro, Logic Pro, and more.
              </Figure.Caption>
            </Figure>

       
        </Modal.Body>
     
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default BasicEduStoreCard;