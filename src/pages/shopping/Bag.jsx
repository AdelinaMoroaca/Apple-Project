import React, { useContext } from 'react';
import { BagContext } from '../../store/Shopping/context';
import { removeFromBag } from '../../store/Shopping/actions';
import { LayoutWhite } from '../../components/Layout';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { Btn } from './../../components/buttons/Btn';
import styles from './Bag.module.css';


function Bag() {
  const { bagState, bagDispatch } = useContext(BagContext); 

//   const [count, setCount] = useState(0);

  let totalCost = 0;
  bagState.bag.forEach(product => {
    const quantity = 1; 
    totalCost += product.price * quantity;
  });
  
  const handleDelete = (id) => {
    bagDispatch(removeFromBag(id));
  };

  const handleIncreaseQuantity = (id) => {
    console.log('+1')
    // setCount(count + 1)
    // bagDispatch(updateQuantity(id, 1));
  };

  const handleDecreaseQuantity = (id) => {
    console.log('-1')
    // setCount(count - 1)
    // const product = bagState.bag.find(item => item.id === id);
    // if (product && product.quantity > 1) {
    //     console.log('+1')
    //   bagDispatch(updateQuantity(id, -1));
    // }
  };

  return (
    <LayoutWhite>
    <Container className={styles.pageContainer}>
      <Row className={styles.pageTitle}>
        <Col>
          <h1>Your bag has these {`${bagState.bag.length}`} products:</h1>
        </Col>
      </Row>

      {
        bagState.bag.length === 0 ?
        <p>Your bag is empty.</p> :
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center align-middle">Product Title</th>
                <th className="text-center align-middle">Finishes Color</th>
                <th className="text-center align-middle">Storage Size</th>
                <th className="text-center align-middle">Quantity</th>
                <th className="text-center align-middle">Price</th>
                <th className="text-center align-middle">Remove item</th>
              </tr>
            </thead>
            <tbody>
              {bagState.bag.map((product) => (
                <tr key={product.id}>
                  <td className="text-center align-middle">{product.title}</td>
                  <td className="text-center align-middle">{product.finish}</td>
                  <td className="text-center align-middle">{product.storageSize}</td>
                  <td className="text-center align-middle">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        variant='outline-dark'
                        onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
                      <span style={{ padding: '0 0.5rem' }}>{product.quantity} 1 </span>
                      <Button
                        variant='outline-dark'
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        onClick={() => handleIncreaseQuantity(product.id)}>+</Button>
                    </div>
                  </td>
                  <td className="text-center align-middle">{product.price}{product.countryValue}</td>
                  <td className="text-center align-middle">
                    <Btn
                      variantType='danger'
                      handleOnClick={() => handleDelete(product.id)}
                      btnText='Delete'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className={styles.pageTitle}>
            <Col className="text-center">
              <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
            </Col>
          </Row>
        </>
      }
    </Container>
  </LayoutWhite>
  )
}

export default Bag;
