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

import StoreCard from "../components/cards/StoreCard";
import BasicCard from "../components/modal/BasicCard";
import SmallCard from "../components/modal/SmallCard";
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
                            <Image 
                            id="img-fluid"
                            src='/images/StorePage/top-img.JPG'
                            alt='509/193'
                            className='img-fluid'
                            // className={styles.imgFluid}
                            rounded />
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
                        
                <StoreProductList 
                    category={category} 
                />               
            </section>

            <section className={styles.bestClassStore}>
                <h2>Advanced tools for advanced studies.
                    <span>Choose from a best-in-class lineup.</span>
                </h2>

                <Container className={styles.bestClassContainer}>
                    <Row xs={6} md={4} className={styles.bestClassRow}>
                    <StoreCard 
                        src='images/StorePage/education/store-card.JPG'
                        giftValue='$150'
                        title='MacBook Air'
                        fullPrice='$899'
                        monthlyPrice='$74.91/mo.'
                    />

                    <StoreCard
                        src='images/StorePage/education/ipad-card.JPG'
                        giftValue='$100'
                        title='iPad Air'
                        fullPrice='$549'
                        monthlyPrice='$45.75/mo.'
                    />

                    <StoreCard
                        src='images/StorePage/education/macbook-pro-card.JPG'
                        giftValue='$150'
                        title='MacBook Pro'
                        fullPrice='$1499'
                        monthlyPrice='$124.91/mo.'
                    />

                    <StoreCard
                        src='images/StorePage/education/ipad-pro-card.JPG'
                        giftValue='$100'
                        title='iPad Pro'
                        fullPrice='$899'
                        monthlyPrice='$74.91/mo.'                         
                    />
                    </Row>
            

                </Container>
            </section>

            <section className={styles.educationStore}>
                <h2>
                    Max out your credits.
                    <span>Add even more exclusive education offers.</span>
                </h2>
            
                <Container className={styles.educationContainer}>
                    <Row>
                    <Col className={styles.leftContainer} md={4}>
                        <BasicCard
                        title="See all the ways to get set for college."
                        src="/images/StorePage/main.JPG"
                        width={355}
                        height={500}
                        alt="400x500"
                        />
                    </Col>

                    <Col className={styles.rightContainer} md={8}>
                        <Row className={styles.firstRow}>
                        <Col md={6}>
                            <SmallCard
                            //   title="Education savings for students, faculty, and more."
                            src="/images/StorePage/4.JPG"
                            //   src="/images/StorePage/edu-sticker.PNG"
                            width={480}
                            height={240}
                            />
                        </Col>
                        <Col md={6}>
                            <SmallCard
                            //   title="Apple Music Student Plan with free Apple TV+."
                            src="/images/StorePage/3.JPG"
                            width={480}
                            height={240}
                            />
                        </Col>
                        </Row>
                        <Row className={styles.secondRow}>
                        <Col md={6}>
                            <SmallCard
                            //   title="20% off AppleCare+."
                            src="/images/StorePage/2.JPG"
                            width={480}
                            height={240}
                            />
                        </Col>
                        <Col md={6}>
                            <SmallCard
                            //   title="Get the Pro Apps Bundle for $199.99."
                            src="/images/StorePage/1.JPG"
                            width={480}
                            height={240}
                            />
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.bestClassStore}>
                <h2>Endless potential.
                    <span>Take teaching and learning further with Apple.</span>
                </h2>

                <Container className={styles.bestClassContainer}>
                    <Row className={styles.bestClassRow} xs={6} md={4}>
                        <StoreCard 
                            src='images/StorePage/endlessPotential/college-card.JPG'
                            giftValue='$150'
                            title='MacBook Air'
                            fullPrice='$899'
                            monthlyPrice='$74.91/mo.'
                        />

                        <StoreCard
                            src='images/StorePage/endlessPotential/todayatapple-card.JPG'
                            giftValue='$100'
                            title='iPad Air'
                            fullPrice='$549'
                            monthlyPrice='$45.75/mo.'
                        />

                        <StoreCard
                            src='images/StorePage/education/macbook-pro-card.JPG'
                            giftValue='$150'
                            title='MacBook Pro'
                            fullPrice='$1499'
                            monthlyPrice='$124.91/mo.'
                        />

                        <StoreCard
                            src='images/StorePage/education/ipad-pro-card.JPG'
                            giftValue='$100'
                            title='iPad Pro'
                            fullPrice='$899'
                            monthlyPrice='$74.91/mo.'                         
                        />
                    </Row>
            

                </Container>
            </section>
   
        </LayoutWhite>
    )

}

export default Storepage;