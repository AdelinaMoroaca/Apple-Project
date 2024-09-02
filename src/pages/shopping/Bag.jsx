import React, { useContext } from 'react';
import { BagContext } from '../../store/Shopping/context';
import { removeFromBag } from '../../store/Shopping/actions';
import { LayoutWhite } from '../../components/Layout';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { Btn } from './../../components/buttons/Btn';
import styles from './Bag.module.css';


function Bag() {
  const { bagState, bagDispatch } = useContext(BagContext); 

  let totalCost = 0;
  bagState.bag.forEach(product => {
    const quantity = 1; 
    totalCost += product.price * quantity;
  });
  
  const handleDelete = (id) => {
    bagDispatch(removeFromBag(id));
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
                            <th>Product Title</th>
                            <th>Finishes Color</th>
                            <th>Storage Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bagState.bag.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.finish}</td>
                            <td>{product.storageSize}</td>
                            <td>1</td>
                            <td>{product.price}{product.countryValue}</td>
                            <td>
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
                    <Col>
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
