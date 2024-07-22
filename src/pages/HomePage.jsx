// import Geolocation from '../demoComponents/Geolocation';
// import { Counter } from '../demoComponents/Counter';
import { LayoutBlack } from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselHomePage from '../components/carousel/Carousel';
import { LargeImageCard, LargeVideoCard } from "../components/cards/LargeCard";
import { GridCard } from '../components/cards/GridCard'
import { LearnMoreBtn } from '../components/buttons/learnMore/LearnMore';
import { ShopBtn } from '../components/buttons/shop/ShopBtn';
import { BuyBtn } from '../components/buttons/buy/BuyBtn';
import { GetYourEstimateBtn } from '../components/buttons/estimation/GetYourEstimateBtn';
import { ApplyNowBtn } from '../components/buttons/apply/ApplyNowBtn';
import { WatchTheFilm } from '../components/buttons/seeMovie/WatchTheFilm';
import FetchExample from './../utils/hooks/FetchEx'


import styles from "./Homepage.module.css";

function Homepage(){

  
    
    return(
        <LayoutBlack>
            <section className={styles.largeCardContainder}>
                <LargeVideoCard id='LargeVideoCard'
                    src='/videos/vision.mp4'
                    title='-LOGO-Vision Pro' 
                    text='You`ve never seen everything like this before.'
                    firstBtnType = {<LearnMoreBtn className={styles.learnMoreBtn} path='/apple-vision-pro/' />}
                    secondBtnType = {<BuyBtn className={styles.buyBtn} path='/shop/buy-vision/apple-vision-pro/' />}
                />
                
                <LargeImageCard
                    src='/images/HomePage/Store.jpg' 
                    btn = {<ShopBtn className={styles.shopBtn} path='/store/'/>}
                />
                
                <LargeImageCard
                    src='/images/HomePage/iPhoneStore.jpg' 
                    title='iPhone' 
                    text='Our most powerful cameras yet. Ultrafast chips. And USB-C.'
                    btn = {<LearnMoreBtn path='/iphone/'/>}
                    rightBtn = {<ShopBtn path='/shop/buy-iphone/'/>}
                />

            </section>
   
            <Container fluid={true} className={styles.gridContainer}>
                <Row >
                    <Col>
                        <GridCard
                            src='images/HomePage/gridImg/outOfOffice.JPG'
                            title='Out of Office'
                            firstText='Apple at Work works from anywhere'
                            btn={<LearnMoreBtn path='/business/'/>} //https://www.apple.com/business/
                            rightBtn={<WatchTheFilm 
                                titleMovie = 'The Underdogs: OOO (Out Of Office) | Apple at Work'
                                src="https://www.youtube.com/embed/SbYckRAt5os" />}
                    
                        />
                    </Col>

                    <Col>
                        <GridCard
                        src='images/HomePage/gridImg/appleIntelligence.JPG'
                        title='Apple Intelligence'
                        firstText='AI for the rest of us.'
                        text2='Coming in beta this fall'
                        btn={<LearnMoreBtn path='/apple-intelligence/'/>}
                        rightBtn={<WatchTheFilm 
                            titleMovie = 'Apple Intelligence in 5 minutes'
                            src="https://www.youtube.com/embed/Q_EYoV1kZWk?start=31"/>}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <GridCard
                        src='images/HomePage/gridImg/iPadPRO.JPG'
                        title='iPad Pro'
                        firstText='Unbelievably thin. Incredibly powerful.'
                        secondText='Ultrafast chips. And USB-C.'
                        btn={<LearnMoreBtn path='/ipad-pro/' />}
                        rightBtn={<BuyBtn 
                            path='/shop/buy-ipad/ipad-pro/'/>}
                        />
                    </Col>

                    <Col>
                        <GridCard
                        src='images/HomePage/gridImg/watch.JPG'
                        title='logo-WATCH'
                        firstText='series 9'
                        secondText='Smarter. Brighter. Mightier'
                        btn={<LearnMoreBtn path='/apple-watch-series-9/'/>}
                        rightBtn={<BuyBtn path='/shop/buy-watch/apple-watch'/>}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <GridCard className={styles.tradeInCard}
                        src='images/HomePage/gridImg/card.JPG'
                        title='logo-CARD'
                        firstText='Get up to 3% Daily Cash back' 
                        secondText='with every purchase.'
                        btn={<LearnMoreBtn path='/apple-card/' />}
                        rightBtn={<ApplyNowBtn className={styles.applyNowBtn} path='/apple-card/signin/' />}
                        />
                    </Col>

                    <Col>
                        <GridCard className={styles.tradeInCard} id='tradeInCard'
                        src='images/HomePage/gridImg/tradeIn.JPG'
                        title='logo-Trade In'
                        firstText='Get $170-$620 in credit when you'
                        secondText=' trade in iPhone 11 or higher.'
                        btn={<GetYourEstimateBtn path='/shop/trade-in'/>}
                        />
                    </Col>
                </Row>
            </Container>

            <CarouselHomePage/>

            <FetchExample/>

            {/* <ImgOverlayExample className={styles.child}/> */}
            {/* <Container fluid={true} className={styles.banner}>
                <Row className={styles.bannerRow}>
              
                    <Col className={styles.bannerCol}> 
                        <ImgOverlayExample className={styles.child}/>
                    </Col>
                </Row>
            </Container> */}

            {/* <Container fluid={true} className={styles.padding}>
                <Row>
                    <Col><Banner/></Col>
                    <Col><Banner/></Col>
                </Row>
                <Row>
                    <Col><Banner/></Col>
                    <Col><Banner/></Col>
                </Row>
            </Container> */}

            {/* <div style={newStyle}>
                
                     <section style={bannerContainerStyle}> */}
                       {/* iPad Pro  merge la ultumul iPad*/}
                      {/* <Banner/> */}
    
                       {/* shop/back-to-school*/}
                       {/* <Banner/> */}
    
                    {/* iPhone ~ merge la pagina de iphone/ */}
                     {/* <Banner/> */}
                {/* </section> */}
    
                     {/* <section style={gridContainerStyle}> */}
                       {/* <Banner/> */}
                       {/* <Banner/> */}
                    {/* <Banner/> */}
                      {/* <Banner/> */}
                        {/* <Banner/> */}
                      {/* <Banner/> */}
                  {/* </section> */}
    
    
        
                 {/* </div>             */}
        </LayoutBlack>
        
        
    )

}

export default Homepage;


    // const newStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // gap: '12px',
    //     width: '100%'
    // }


    // const bannerContainerStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     gap: '0.75rem',
    //     width: '100%',
    //     marginBottom: '0.75rem'
    // }

    // const gridContainerStyle = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
    //     gap: '0.75rem',
    //     width: '100%',
    // }