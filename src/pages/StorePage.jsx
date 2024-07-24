import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { StoreProduct } from "../demoComponents/StoreProduct";
import {StoreProductList} from "./StoreProductList";
import { LayoutWhite } from "../components/Layout";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import StoreCard from "../components/modal/ModalStore";
import styles from "./../pages/StorePage.module.css";

function Storepage(){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://json-server-deployment-5til.onrender.com/category")
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
       
            <section className={styles.storeIntro}>
                <Container className={styles.containerIntro}>
                    <Row className={styles.rowContainer}>
                        <Col xs={6} md={4}>
                        <Image src="/images/StorePage/top-img.JPG" width='509px' height='193px' rounded />
                        </Col>
                    </Row>
                    <Row className={styles.aboutIntro}>
                        <Col className={styles.leftIntro}>
                      
                            <h1 className={styles.classicText}>
                                <span className={styles.colourText}>Education Store.</span>
                                The most powerful tools for learning.
                            </h1>
                        </Col>
                        <Col className={styles.rightIntro}>
                            <h1 className={styles.classicText}>Section</h1>
                        </Col>
                    </Row>

                </Container>
                        
                <StoreProductList category={category} />   
                {/* <Link to={`/category/${category.id}`}>{category.title}</Link>  */}

                {/* <ul class= 'StoreProductList'>
        
                    {category.map((category) => (
                        <li style={{color: 'white'}} key={category.id}>
                            <Link style={{color: 'white'}} to={`/category/${category.id}`}>{category.title}</Link> 
                        </li>
                    ))} 
            
                </ul> */}
            
            </section>

            <section>
                <Container>
                    <h2>Advanced tools for advanced studies.<span>Choose from a best-in-class lineup.</span></h2>
                    {/* Modal */}
                    <section style={{display: 'flex'}}>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    </section>
                </Container>
                    {/* <h2>Advanced tools for advanced studies.<span>Choose from a best-in-class lineup.</span></h2>
               
                    <section style={{display: 'flex'}}>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    </section> */}
            </section>

            <section>
                    <h2>Max out your credits.<span>Add even more exclusive education offers.</span></h2>
                    {/* Modal */}
                    <section style={{display: 'flex'}}>
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                    </section>
            </section>

  
     
        </LayoutWhite>
    )

}

export default Storepage;