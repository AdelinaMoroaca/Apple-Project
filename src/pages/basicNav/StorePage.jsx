import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EducationIcon } from '../../assets/education-hat.svg';

// import {StoreProductList} from "./StoreProductList";
import { Layout } from '../../components/Layout';
import {Container, Image, Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import BasicEduStoreCard from "../../components/modal/BasicEduStoreCard";
// import SmallCard from "../../components/modal/SmallCard";

// import { useFetchData } from '../../utils/hooks/useFetch';
// import CarouselSwiper from '../../demo/CarouselSwiper';
import LargeCardsCarousel from "../../components/carousel/LargeCardsCarousel";

//old
// import { CarouselSwiperList } from "../../components/carousel/CarouselSwiperList";
//updates firbase
import Figure from 'react-bootstrap/Figure';
import { CategoriesContext } from "../../store/contexts-D/CategoriesContext";
import styles from './StorePage.module.css';



function Storepage(){
    const [userInteraction, setUserInteraction] = useState(false);
    const { categoriesMap } = useContext(CategoriesContext);
    const navigate = useNavigate();

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

    const handleCategoryNavigation = (title) => {
        if (categoriesMap[title] && categoriesMap[title].routeName) {
          navigate(`/${categoriesMap[title].routeName}`);
        }
    }

    // need to update backendss
    const educationStoreCards = [
        {
          src: 'images/StorePage/education/store-card.JPG',
          giftValue: '$150',
          title: 'MacBook Air',
          fullPrice: '$899',
          monthlyPrice: '$74.91/mo.',
        },
        {
          src: 'images/StorePage/education/ipad-card.JPG',
          giftValue: '$100',
          title: 'iPad Air',
          fullPrice: '$549',
          monthlyPrice: '$45.75/mo.',
        },
        {
          src: 'images/StorePage/education/macbook-pro-card.JPG',
          giftValue: '$150',
          title: 'MacBook Pro',
          fullPrice: '$1499',
          monthlyPrice: '$124.91/mo.',
        },
        {
          src: 'images/StorePage/education/ipad-pro-card.JPG',
          giftValue: '$100',
          title: 'iPad Pro',
          fullPrice: '$899',
          monthlyPrice: '$74.91/mo.',
        },
        {
          src: 'images/StorePage/education/imac-card.JPG',
          giftValue: '$150',
          title: 'iMac',
          fullPrice: '$1249',
          monthlyPrice: '$104.08/mo.',
        },
        {
          src: 'images/StorePage/education/mac-mini-card.JPG',
          giftValue: '$100',
          title: 'Mac mini',
          fullPrice: '$499',
          monthlyPrice: '$41.58/mo.',
        },
    ];

    return(
        <Layout bgThemeVariant="light" iconColor="gray" className={styles.backgroundLayout}>
            <section className={styles.storeIntro}>
                <Container fluid>
                    <Row className='text-center'>
                        <Col>
                            <Image src={'/images/StorePage/top-img.JPG'} alt="education store"
                                className={styles.educationStoreImg}
                                fluid
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
                                <EducationIcon/>                   
                                <div className={styles.textContainer}>
                                    <h6 className={styles.classicText}>Need shopping help?</h6>
                                    <Link className={styles.classicText}>Ask a specialist</Link>
                                </div>
                            </Container>

                            <Container className={styles.shoppingStore}>
                                <EducationIcon/>  
                                <div className={styles.textContainer}>
                                    <h6 className={styles.classicText}>Visit an Apple Store</h6>
                                    <Link className={styles.classicText}>Find one near you</Link>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section 
                style={{ 
                    zIndex: 1, 
                    marginTop: '20px', 
                    position: 'relative', 
                    backgroundColor: 'magenta',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                }}
                //when user interaction is on apply .noPadding style class
                className={`${styles.storeCarouselSwiperList} 
                ${userInteraction ? '' : ''}
                `} 
                onClick={handleInteraction}
                onTouchStart={handleInteraction}
            > */}
                {/* <SwiperDemo/> */}
                <Container 
                style={{
                    marginBottom: '4rem',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                }}>
                    <Row className="g-4" 
                        style={{
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                        }}>
                        {Object.keys(categoriesMap).map((title) => (
                            <Col key={title} xs={6} sm={4} md={3} lg={2}
                                style={{
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                }}>

                                <Figure key={title} style={{
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center', 
                                alignItems: 'center',
                                cursor: 'pointer',
                                }}
                                onClick={() => handleCategoryNavigation(title)}
                                >
                                    <Figure.Image
                                        rounded
                                        fluid
                                        style={{ minWidth: '90px', width: '260px'}}
                                        width={180}
                                        height={180}
                                        alt={title}
                                        src={categoriesMap[title].imageUrl}
                                    />
                            
                                    <Figure.Caption style={{ whiteSpace: 'nowrap'}}>
                                        <Link to={`/${categoriesMap[title].routeName}`} 
                                        style={{
                                        color: 'black', 
                                        textDecoration: 'none', 
                                        fontWeight: 'bold'}}>
                                        {title}
                                        </Link>
                                    </Figure.Caption> 
                                </Figure>
                            </Col>
                        ))}
                    </Row>
                </Container>
   
            <section className={`${styles.bestClassStore}`} 
                // ${userInteraction ? styles.noPadding : ''}`} 
                // onClick={handleInteraction}
                // onTouchStart={handleInteraction}
            >
                <h2 className={styles.aboutBestClassStore}>Advanced tools for advanced studies.
                    <span> Choose from a best-in-class lineup.</span>
                </h2>

                <LargeCardsCarousel 
                    cards={educationStoreCards}
                    slidesPerView={{
                        320: 1.2,
                        640: 1.6,
                        1024: 2.4,
                    }}

                    spaceBetween={{
                        320: 10,
                        640: 20,
                        1024: 35,
                    }}
                />
            </section>

            {/* <section className={styles.educationStore}>
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
            </section> */}
        </Layout>
    )

}

export default Storepage;