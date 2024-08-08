import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './StoreProductList.module.css';

function ProductCategory(props){
    const { category } = props;

    const handleCategory = (category) => {
        console.log(`Added ${category.title} `);

    }

    return (
        <Figure className={styles.figureCategory}>
            <Figure.Image
                className={styles.roundedImage}
                width={120}
                height={78}
                alt="200x130"
                src={category.imagePath}
            />
            <Figure.Caption>
                <Link className={styles.figureLink} onClick={()=> handleCategory(category)} to={`/shop/buy-${category.title}/`}>{category.title}</Link>
            </Figure.Caption>
        </Figure>
    )
}

function StoreProductList(){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://json-server-deployment-5til.onrender.com/category")
            .then((response) => response.json())
            .then((data) => {
                setproductCategory(data);
            });
    }

    useEffect(() => {
        getAppleCategory();
    },[]);

    return (
       
        <Container className={styles.categoryContainer}>
            <Row>
                <Col>
                    {
                    category.map((category) => (
                        <ProductCategory 
                            
                            key={category.id} 
                            category={category} 
                            alt={category}
                            src={category}
                        />
                        ))
                    }
                
                </Col>
            </Row>
        </Container>
    )
}


export { StoreProductList };


