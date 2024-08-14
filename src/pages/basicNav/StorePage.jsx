import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import {StoreProductList} from "./StoreProductList";
import { LayoutWhite } from "../../components/Layout";
import {Container, Image, Col, Row } from 'react-bootstrap';
// import StoreCard from "../../components/cards/StoreCard";
import BasicEduStoreCard from "../../components/modal/BasicEduStoreCard";
import SmallCard from "../../components/modal/SmallCard";

// import { useFetchData } from '../../utils/hooks/useFetch';
// import CarouselSwiper from '../../demo/CarouselSwiper';
import LargeCardsCarousel from "../../components/carousel/LargeCardsCarousel";
import { CarouselSwiperList } from "../../components/carousel/CarouselSwiperList";
import styles from './StorePage.module.css';



function Storepage(){
    const [userInteraction, setUserInteraction] = useState(false);

    useEffect(() => {
        // Clean up the effect if needed
        return () => {
            window.removeEventListener('resize', handleInteraction);
        };
    }, []);

    const handleInteraction = () => {
        if (window.innerWidth <= 1540) {
            setUserInteraction(true);
        }
    };
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
                <Container fluid>
                    <Row className='text-center'>
                        <Col>
                            <Image
                            fluid
                            src={'/images/StorePage/top-img.JPG'}
                            alt="me"
                            className={styles.educationStoreImg}
                            />
                           
                        </Col>
                    </Row>
                    
                    <Row className={`${styles.aboutIntro} mt-4`}>
                        <Col xs={12} md={6} lg={4} className={styles.leftIntro}>
                            <h1 className={styles.classicText}>
                                <span className={styles.colourText}><b>Education Store.</b></span>
                                <span className={styles.grayText}><b>The most<wbr /> powerful tools for learning.</b></span>
                               
                            </h1>
                        </Col>

                        <Col xs={12} md={6} lg={4} className={styles.rightIntro}>
                            <Container className={styles.shoppingHelp}>                     
                                <svg role="img" aria-labelledby="edu-savings-svgtxt" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><text id="edu-savings-svgtxt" class="visuallyhidden">Education Savings</text><g fill="none" fill-rule="evenodd"><path d="m0 0h35v35h-35z"></path><path d="m9 18.7728v5.3914c-.61143092-.6239047-.96802746-1.4535266-1-2.3265v-3.5207l.9272.4224zm11.6159 2.4615c-.9317176.4767769-1.958535.7384363-3.0048.7657l-.0867-.0016-.1354.0016c-1.0447951-.027019-2.0702278-.2880245-3.0008-.7638l-3.5775-1.6346-.8107-.3702v5.8144c2.2405033 1.4045651 4.8550652 2.0948159 7.4969 1.9792h.0063c5.8668 0 9.4968-2.5937 9.4968-5.1873v-3.5218l-.9352.4227zm9.5225-8.0083-9.9422-4.5533c-.8190429-.41572779-1.7197947-.64543162-2.6379-.6727h-.0583-.0582c-.9181305.02731605-1.8189046.25701687-2.638.6727l-9.952 4.5533c-.51552366.213068-.85177474.7158805-.85177474 1.2737s.33625108 1.060632.85177474 1.2737l3.1482 1.4444.1089.05 1.0375.4726 6.3436-3.0725c-.0703139-.1033163-.1101635-.2243204-.115-.3492 0-.4745.5565-.8784 1.3413-1.0437.5168439-.1084009 1.0505561-.1084009 1.5674 0 .7848.1653 1.3413.5692 1.3413 1.0437 0 .6213-.9514 1.125-2.125 1.125-.3450911.0006688-.6885257-.0477151-1.02-.1437l-6.1544 2.9809.9006.4112 3.5778 1.6348c.8004678.4149094 1.6838314.6449257 2.585.6731.037 0 .074-.0004333.111-.0013.0371.0009.074.0013.1111.0013.90122-.0282079 1.7846232-.2582939 2.5851-.6733l5.4522-2.4973 1.2427-.5616.1089-.05 3.1384-1.4443c.5204134-.2086963.8615206-.7130002.8615206-1.2737s-.3411072-1.0650037-.8615206-1.2737zm-21.1384 13.424c-.49597634.057359-.87133619.4755314-.875.9748v3.25c0 .5522847.44771525 1 1 1h.75c.5522847 0 1-.4477153 1-1v-3.25c-.0036638-.4992686-.3790237-.917441-.875-.9748v-1.6042c-.36454924-.2564393-.69988581-.552072-1-.8816z" fill="#08827c" fill-rule="nonzero"></path></g></svg>
                                <div className={styles.textContainer}>
                                    <h6 className={styles.classicText}>Need shopping help?</h6>
                                    <Link className={styles.classicText}>Ask a specialist</Link>
                                </div>
                            </Container>

                            <Container className={styles.shoppingStore}>
                                <svg role="img" aria-labelledby="edu-savings-svgtxt" height="35" viewBox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><text id="edu-savings-svgtxt" class="visuallyhidden">Education Savings</text><g fill="none" fill-rule="evenodd"><path d="m0 0h35v35h-35z"></path><path d="m9 18.7728v5.3914c-.61143092-.6239047-.96802746-1.4535266-1-2.3265v-3.5207l.9272.4224zm11.6159 2.4615c-.9317176.4767769-1.958535.7384363-3.0048.7657l-.0867-.0016-.1354.0016c-1.0447951-.027019-2.0702278-.2880245-3.0008-.7638l-3.5775-1.6346-.8107-.3702v5.8144c2.2405033 1.4045651 4.8550652 2.0948159 7.4969 1.9792h.0063c5.8668 0 9.4968-2.5937 9.4968-5.1873v-3.5218l-.9352.4227zm9.5225-8.0083-9.9422-4.5533c-.8190429-.41572779-1.7197947-.64543162-2.6379-.6727h-.0583-.0582c-.9181305.02731605-1.8189046.25701687-2.638.6727l-9.952 4.5533c-.51552366.213068-.85177474.7158805-.85177474 1.2737s.33625108 1.060632.85177474 1.2737l3.1482 1.4444.1089.05 1.0375.4726 6.3436-3.0725c-.0703139-.1033163-.1101635-.2243204-.115-.3492 0-.4745.5565-.8784 1.3413-1.0437.5168439-.1084009 1.0505561-.1084009 1.5674 0 .7848.1653 1.3413.5692 1.3413 1.0437 0 .6213-.9514 1.125-2.125 1.125-.3450911.0006688-.6885257-.0477151-1.02-.1437l-6.1544 2.9809.9006.4112 3.5778 1.6348c.8004678.4149094 1.6838314.6449257 2.585.6731.037 0 .074-.0004333.111-.0013.0371.0009.074.0013.1111.0013.90122-.0282079 1.7846232-.2582939 2.5851-.6733l5.4522-2.4973 1.2427-.5616.1089-.05 3.1384-1.4443c.5204134-.2086963.8615206-.7130002.8615206-1.2737s-.3411072-1.0650037-.8615206-1.2737zm-21.1384 13.424c-.49597634.057359-.87133619.4755314-.875.9748v3.25c0 .5522847.44771525 1 1 1h.75c.5522847 0 1-.4477153 1-1v-3.25c-.0036638-.4992686-.3790237-.917441-.875-.9748v-1.6042c-.36454924-.2564393-.69988581-.552072-1-.8816z" fill="#08827c" fill-rule="nonzero"></path></g></svg>
                                <div className={styles.textContainer}>
                                    <h6 className={styles.classicText}>Visit an Apple Store</h6>
                                    <Link className={styles.classicText}>Find one near you</Link>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                {/* <Container className={styles.containerIntro}>
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
                </Container> */}

                {/* INITIAL DESIGN */}
                {/* {loading && <Spinner />} 
                {data && <StoreProductList category={data} /> } */}
             
           

            </section>


            <section 
                className={`${styles.storeCarouselSwiperList} 
                ${userInteraction ? styles.noPadding : ''}`} 
                onClick={handleInteraction}
                onTouchStart={handleInteraction}
            >
                <CarouselSwiperList/>
            </section>
   
            <section
                className={`${styles.bestClassStore}  `} 
                // ${userInteraction ? styles.noPadding : ''}`} 
                // onClick={handleInteraction}
                // onTouchStart={handleInteraction}
            >
                <h2 className={styles.aboutBestClassStore}>Advanced tools for advanced studies.
                    <span> Choose from a best-in-class lineup.</span>
                </h2>

                <LargeCardsCarousel />
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

            {/* <section className={styles.bestClassStore}>
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
            </section> */}

        </LayoutWhite>
    )

}

export default Storepage;