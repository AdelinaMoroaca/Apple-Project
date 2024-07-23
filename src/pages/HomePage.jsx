// import Geolocation from '../demoComponents/Geolocation';
// import { Counter } from '../demoComponents/Counter';
import { LayoutBlack } from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselImage from '../components/carousel/Carousel';
import { LargeImageCard, LargeVideoCard } from "../components/cards/LargeCard";
import { GridCard } from '../components/cards/GridCard'
import { LearnMoreBtn } from '../components/buttons/learnMore/LearnMore';
import { ShopBtn } from '../components/buttons/shop/ShopBtn';
import { BuyBtn } from '../components/buttons/buy/BuyBtn';
import { GetYourEstimateBtn } from '../components/buttons/estimation/GetYourEstimateBtn';
import { ApplyNowBtn } from '../components/buttons/apply/ApplyNowBtn';
import { WatchTheFilm } from '../components/buttons/seeMovie/WatchTheFilm';
import FetchExample from './../utils/hooks/FetchEx'


// import styles from "./Homepage.module.css";
import styles from './Homepage.module.css';

function Homepage(){

  
    
    return(
        <LayoutBlack>
            <section className={styles.largeCardContainder}>
                <LargeVideoCard 
                    
                    src='/videos/vision.mp4'
                    title='-LOGO-Vision Pro' 
                    firstParagraph='You`ve never seen everything like this before.'
                    leftBtn = {<LearnMoreBtn 
                        id="learnMoreBtn1" 
                        className={styles.learnMoreBtnWhite} 
                        path='/apple-vision-pro/' />}
                        rightBtn = {<BuyBtn  
                        className={styles.buyBtnTransparent} 
                        path='/shop/buy-vision/apple-vision-pro/' />}
                />
                
                <LargeImageCard 
                  
                    src='/images/HomePage/Store.jpg' 
                    leftBtn = {<ShopBtn className={styles.shopBtnBlue} path='/store/'/>}
                />
                
                <LargeImageCard
                   
                    src='/images/HomePage/iPhoneStore.jpg' 
                    title='iPhone' 
                    firstParagraph='Our most powerful cameras yet.'
                    secondParagraph='Ultrafast chips. And USB-C.'
                    leftBtn = {<LearnMoreBtn 
                        className={styles.learnMoreBtnBlue} 
                        path='/iphone/'/>}

                    rightBtn = {<ShopBtn 
                        className={styles.shopBtnTransparent}
                        path='/shop/buy-iphone/'/>}
                    topBody={true}
                />

            </section>
   
            <Container fluid={true} className={styles.gridContainer}>
                <Row className='g-3'>
                    <Col xs={12} md={6}>
                        <GridCard
                            src='images/HomePage/gridImg/outOfOffice.JPG'
                            title='Out of Office'
                            firstText='Apple at Work works from anywhere'
                            leftBtn={<LearnMoreBtn 
                                className={styles.WhiteBtnGrid}
                                path='/business/'/>} //https://www.apple.com/business/
                            rightBtn={<WatchTheFilm 
                                className={styles.TransparentBtnGrid}
                                titleMovie = 'The Underdogs: OOO (Out Of Office) | Apple at Work'
                                src="https://www.youtube.com/embed/SbYckRAt5os" />}
                            whiteText={true}    
                        />
                    </Col>

                    <Col xs={12} md={6}>
                        <GridCard
                        src='images/HomePage/gridImg/appleIntelligence.JPG'
                        title='Apple Intelligence'
                        firstText='AI for the rest of us.'
                        secondText='Coming in beta this fall'
                        text2='Coming in beta this fall'
                        leftBtn={<LearnMoreBtn 
                            className={styles.BlueBtnGrid}
                            path='/apple-intelligence/'/>}
                        rightBtn={<WatchTheFilm 
                            className={styles.BlueTransparentBtnGrid}
                            titleMovie = 'Apple Intelligence in 5 minutes'
                            src="https://www.youtube.com/embed/Q_EYoV1kZWk?start=31"/>}
                        />
                    </Col>
                </Row>

                <Row className='g-3'>
                    <Col xs={12} md={6}>
                        <GridCard
                        src='images/HomePage/gridImg/iPadPRO.JPG'
                        title='iPad Pro'
                        firstText='Unbelievably thin. Incredibly powerful.'
                        leftBtn={<LearnMoreBtn
                            className={styles.BlueBtnGrid}
                            path='/ipad-pro/' />}
                        rightBtn={<BuyBtn 
                            className={styles.BlueTransparentBtnGrid}
                            path='/shop/buy-ipad/ipad-pro/'/>}
                        whiteText={true} 
                        />
                        
                    </Col>

                    <Col xs={12} md={6}>
                        <GridCard
                        src='images/HomePage/gridImg/watch.JPG'
                        title='logo-WATCH'
                        firstText='series 9'
                        secondText='Smarter. Brighter. Mightier'
                        leftBtn={<LearnMoreBtn 
                            className={styles.BlueBtnGrid}
                            path='/apple-watch-series-9/'/>}
                        rightBtn={<BuyBtn 
                            className={styles.BlueTransparentBtnGrid}
                            path='/shop/buy-watch/apple-watch'/>}
                        whiteText={true} 
                        />
                    </Col>
                </Row>

                <Row className='g-3'>
                    <Col xs={12} md={6}>
                        <GridCard 
                        className={styles.tradeInCard}
                        src='images/HomePage/gridImg/card.JPG'
                        title='logo-CARD'
                        firstText='Get up to 3% Daily Cash back' 
                        secondText='with every purchase.'
                        leftBtn={<LearnMoreBtn 
                            className={styles.BlueBtnGrid}
                            path='/apple-card/' />}
                        rightBtn={<ApplyNowBtn 
                            className={styles.BlueTransparentBtnGrid} 
                            path='/apple-card/signin/' />}
                        />
                    </Col>

                    <Col xs={12} md={6}>
                        <GridCard className={styles.tradeInCard} id='tradeInCard'
                        src='images/HomePage/gridImg/tradeIn.JPG'
                        title='logo-Trade In'
                        firstText='Get $170-$620 in credit when you'
                        secondText=' trade in iPhone 11 or higher.'
                        leftBtn={<GetYourEstimateBtn 
                            className={styles.BlueBtnGrid}
                            path='/shop/trade-in'/>}
                        />
                    </Col>
                </Row>
            </Container>

            <CarouselImage/>

            <FetchExample/>

            
        </LayoutBlack>
        
        
    )

}

export default Homepage;