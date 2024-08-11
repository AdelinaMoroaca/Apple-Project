import React, { useContext } from "react";
import { BagContext } from "../../store/Shopping/context";
import { LayoutWhite } from '../../components/Layout';
import { Table, Container, Row, Col } from "react-bootstrap";
import styles from "./Bag.module.css";


function Bag() {
  const { bagState } = useContext(BagContext); 
//   const [selectedOptions, setSelectedOptions] = useState({});

  let totalCost = 0;
  bagState.bag.forEach(product => {
    // const selected = selectedOptions[product.id] || {};
    const quantity = 1; 
    totalCost += product.price * quantity;
  });
  
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
                        </tr>
                    </thead>
                    <tbody>
                        {bagState.bag.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.finish}</td>
                            <td>{product.storage}</td>
                            <td>1</td>
                            <td>{product.price}{product.countryValue}</td>
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