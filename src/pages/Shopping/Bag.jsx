import React, { useContext } from "react";
import { BagContext } from "../../store/Shopping/context";
import { LayoutWhite } from '../../components/Layout';
import {  Button, Container, Row, Col } from "react-bootstrap";
import styles from "./Bag.module.css";


function Bag() {
  const { bagState } = useContext(BagContext); 

    const handleThemeChange = () =>{
        console.log('click')
    }
  
  return (
    <LayoutWhite >
        <Container className={styles.pageContainer}>
            <Row className={styles.pageTitle}>
                <Col>
                    <h1>
                        Bag {`(${bagState.bag.length})`}
                    </h1>
                    {
                        bagState.bag.length === 0 ?
                        <p>Your cart is empty.</p> : 
                        <ul>
                            {
                                bagState.bag.map((product) => {
                                    return <li key={product.id}>{product.title}</li>
                                })
                            }
                        </ul>
                    }
                </Col>
                <Col>
                    <Button 
                    onClick={handleThemeChange}
                    variant="light">Change theme</Button>  
                </Col>
            </Row>

        </Container>
    </LayoutWhite>
  )
}

export default Bag;
