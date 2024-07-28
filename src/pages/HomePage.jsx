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
import styles from './Homepage.module.css';

function Homepage(){
    return(
        <LayoutBlack>
            <section className={styles.largeCardContainder}>
                <LargeVideoCard 
                src='/videos/vision.mp4'
                svgHeight='48'
                viewBox='0 0 17 48'
                svgWidth='17'
                xmlnsLink="http://www.w3.org/2000/svg"
                dPath="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
                title='Vision Pro' 
                firstParagraph='You`ve never seen everything like this before.'
                leftBtn={<LearnMoreBtn id="learnMoreBtn1" className={styles.learnMoreBtnWhite} path='/apple-vision-pro/' />}
                rightBtn={<BuyBtn className={styles.buyBtnTransparent} path='/shop/buy-vision/apple-vision-pro/' />}
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
                                path='/business/'/>}

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

        </LayoutBlack>
    )
}

export default Homepage;