import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { StoreProduct } from "../demoComponents/StoreProduct";
import StoreProductList from "../demoComponents/StoreProductList";
import { LayoutWhite } from "../components/Layout";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import styles from "./../pages/StorePage.module.css";

function Storepage(){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://localhost:3001/category")
        .then((response) => response.json())
        .then((data) => {
            setproductCategory(data)
        })
       
    }

    useEffect(() => {
        getAppleCategory();
    },[]);


    return(
        <LayoutWhite>
        {/* <LayoutWhite> */}
        <section className={styles.newStyle}>
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="/images/StorePage/top-img.JPG" width='510px' height='194px' rounded />
                </Col>
            </Row>
        </Container>
            
            <h1><span>Education Store.</span>The most powerful tools for learning.</h1>
       

            <StoreProductList category={category} />   
            <Link to={`/category/${category.id}`}>{category.title}</Link> 

            <ul>
                {/* <StoreProductList */}
                {category.map((category) => (
                    <li style={{color: 'white'}} key={category.id}>
                         <Link style={{color: 'white'}} to={`/category/${category.id}`}>{category.title}</Link> 
                    </li>
                ))} 
                {/* />  */}
            </ul>
            {/* <Iphone/> */}
        </section>

        {/* </LayoutWhite> */}
        </LayoutWhite>
    )

}

export default Storepage;