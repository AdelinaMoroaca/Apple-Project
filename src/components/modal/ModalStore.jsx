import { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import styles from './ModalStore.module.css';

// function StoreCard() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Card variant="primary" onClick={handleShow} style={{ width: '18rem', height: '26rem' }}>
//         Launch demo modal ~ will be a card
//       </Card>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>pharagraph : Woohoo, you are reading this text in a modal!</p>
//           <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//             </Figure>
//             <Modal.Title>title</Modal.Title>
//             <Modal.Title>title</Modal.Title>


//             <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//               <Figure.Caption>
//                 A caption for the imvvvvvvvvvvvvvvvvvage.
//               </Figure.Caption>
//             </Figure>

//             <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//               <Figure.Caption>
//                 A caption for the imvvvvvvvvvvvvvvvvvage.
//               </Figure.Caption>
//             </Figure>

//             <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//               <Figure.Caption>
//                 A caption for the imvvvvvvvvvvvvvvvvvage.
//               </Figure.Caption>
//             </Figure>

//             <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//               <Figure.Caption>
//                 A caption for the imvvvvvvvvvvvvvvvvvage.
//               </Figure.Caption>
//             </Figure>

//             <Figure>
//               <Figure.Image
//                 width={171}
//                 height={180}
//                 alt="171x180"
//                 src="https://via.placeholder.com/171x180" // Use an actual image URL or path
//                 className={styles.roundedImage} // Apply the CSS module class
//               />
//               <Figure.Caption>
//                 A caption for the image.
//               </Figure.Caption>
//               <Figure.Caption>
//                 A caption for the imvvvvvvvvvvvvvvvvvage.
//               </Figure.Caption>
//             </Figure>
//         </Modal.Body>
     
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </>
//   );
// }

function StoreCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card variant="primary" onClick={handleShow} style={{ width: '18rem', height: '26rem' }}>
        Launch demo modal ~ will be a card
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>pharagraph : Woohoo, you are reading this text in a modal!</p>
          <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
            </Figure>
            <Modal.Title>title</Modal.Title>
            <Modal.Title>title</Modal.Title>


            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
              <Figure.Caption>
                A caption for the imvvvvvvvvvvvvvvvvvage.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
              <Figure.Caption>
                A caption for the imvvvvvvvvvvvvvvvvvage.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
              <Figure.Caption>
                A caption for the imvvvvvvvvvvvvvvvvvage.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
              <Figure.Caption>
                A caption for the imvvvvvvvvvvvvvvvvvage.
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://via.placeholder.com/171x180" // Use an actual image URL or path
                className={styles.roundedImage} // Apply the CSS module class
              />
              <Figure.Caption>
                A caption for the image.
              </Figure.Caption>
              <Figure.Caption>
                A caption for the imvvvvvvvvvvvvvvvvvage.
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

export default StoreCard;