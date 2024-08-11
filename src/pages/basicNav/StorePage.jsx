import React from "react";
// import {StoreProductList} from "./StoreProductList";
import { LayoutWhite } from "../../components/Layout";
import {Container, Image, Col, Row } from 'react-bootstrap';
import StoreCard from "../../components/cards/StoreCard";
import BasicEduStoreCard from "../../components/modal/BasicEduStoreCard";
import SmallCard from "../../components/modal/SmallCard";
// import { useFetchData } from '../../utils/hooks/useFetch';
// import CarouselSwiper from '../../demo/CarouselSwiper';
import {CarouselSwiperList} from "../../components/carousel/CarouselSwiperList";
import styles from './../basicNav/StorePage.module.css';


function Storepage(){
    // const [category, setproductCategory] = useState([]);

    // function getAppleCategory() {
    //     fetch("https://json-server-deployment-5til.onrender.com/category")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setproductCategory(data)
    //     })
       
    // }

    // useEffect(() => {
    //     getAppleCategory();
    // },[]);

    // const { data, loading } = useFetchData(
    //     "https://json-server-deployment-5til.onrender.com/category"
    // );


    return(
        <LayoutWhite>
            <section className={styles.storeIntro}>
                <Container className={styles.containerIntro}>
                    <Row className={styles.rowContainer}>
                        <Col xs={12} md={4} className={styles.imageCol}>
                            <Image 
                            
                            src='/images/StorePage/top-img.JPG'
                            alt='509/193'
                            className={`${styles.imgFluid} img-fluid`}
                            rounded />
                        </Col>
                    </Row>
                    <Row className={styles.aboutIntro}>
                        <Col xs={12} md={4} className={styles.leftIntro}>
                            <h1 className={styles.classicText}>
                                <span className={styles.colourText}>Education Store.</span>
                                The most powerful tools for learning.
                            </h1>
                        </Col>
                        <Col xs={12} md={4} className={styles.rightIntro}>
                            <div>
                                <h6 className={styles.classicText}>Need shopping help?</h6>
                                <h6 className={styles.classicText}>Ask a specialist</h6>
                            </div>

                            <div>
                                <h6 className={styles.classicText}>Visit an Apple Store</h6>
                                <h6 className={styles.classicText}>Find one near you</h6>
                            </div>

                        </Col>
                    </Row>

                
                </Container>

                {/* INITIAL DESIGN */}
                {/* {loading && <Spinner />} 
                {data && <StoreProductList category={data} /> } */}
             


            </section>

   
            <CarouselSwiperList/>
       


            {/* <CarouselSwiper/> */}
            <section className={styles.bestClassStore}>
                <h2>Advanced tools for advanced studies.
                    <span> Choose from a best-in-class lineup.</span>
                </h2>

                <Container className={styles.bestClassContainer}>
                    <Row className={styles.bestClassRow}>

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
                    <span> Add even more exclusive education offers.</span>
                </h2>
            
                <Container className={styles.educationContainer}>
                    <Row>
                        <Col xs={12} md={4} className={styles.leftContainer}>
                            <BasicEduStoreCard
                            title="See all the ways to get set for college."
                            src="/images/StorePage/main.JPG"
                            width={380}
                            height={500}
                            alt="400x500"
                            />
                        </Col>

                    <Col xs={12} md={8} className={styles.rightContainer}>
                        <Row className={styles.firstRow}>
                        <Col xs={12} sm={6}>
                            <SmallCard
                            title="Education savings for students, faculty, and more."
                            src="/images/StorePage/4.JPG"
                            width={480}
                            height={250}
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <SmallCard
                            title="Apple Music Student Plan with free Apple TV+."
                            src="/images/StorePage/3.JPG"
                            width={480}
                            height={250}
                            />
                        </Col>
                        </Row>
                        <Row className={styles.secondRow}>
                        <Col xs={12} sm={6}>
                            <SmallCard
                            title="20% off AppleCare+."
                            src="/images/StorePage/2.JPG"
                            width={480}
                            height={250}
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <SmallCard
                            title="Get the Pro Apps Bundle for $199.99."
                            src="/images/StorePage/1.JPG"
                            width={480}
                            height={250}
                            />
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.bestClassStore}>
                <h2>Endless potential.
                    <span> Take teaching and learning further with Apple.</span>
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