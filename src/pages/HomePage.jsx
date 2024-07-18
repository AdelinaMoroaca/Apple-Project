// import Geolocation from '../demoComponents/Geolocation';
import { Banner } from '../demoComponents/Banner';
// import { Counter } from '../demoComponents/Counter';
import { LayoutBlack } from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselHomePage from '../components/componentsDemo/carousel/Carousel';
import { LargeVideoCard, LargeImageCard } from "../components/Card";
import styles from "./Homepage.module.css";

function Homepage(){


    return(
        // <>
        <LayoutBlack>
            <section className={styles.largeCardContainder}>
                <LargeVideoCard/>
                <LargeImageCard/>
                <LargeImageCard/>             
            </section>
   
            <Container fluid={true} className={styles.gridContainer}>
                {/* 1.2 rem gap */}
                <Row >
                    <Col><Banner/></Col>
                    <Col><Banner/></Col>
                </Row>

                <Row>
                    <Col><Banner/></Col>
                    <Col><Banner/></Col>
                </Row>

                <Row>
                    <Col><Banner/></Col>
                    <Col><Banner/></Col>
                </Row>
            </Container>

            <CarouselHomePage/>
            <h2>hjj</h2>

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