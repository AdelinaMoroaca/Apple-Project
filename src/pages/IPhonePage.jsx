import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LayoutWhite } from "../components/Layout";
import FetchExample from './../utils/hooks/FetchEx';
import Card from 'react-bootstrap/Card';

function Iphones() {
    const [iPhone, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://json-server-deployment-5til.onrender.com/iPhone")
        .then((response) => response.json())
        .then((data) => {
            setproductCategory(data)
        })
       
    }


    useEffect(() => {
        getAppleCategory();
    },[]);

    // pt video
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error("Video play was prevented:", error);
          });
        }
      }, []);
  

  return (
    <LayoutWhite>
        <div>
        <p>Pagina de prezentare</p>
            <h1>iPhones</h1>
            <ul>
                {iPhone.map((iPhone) => (
                <li key={iPhone.id}>
                    <Link to={`/iPhone/${iPhone.id}`}>{iPhone.category} - {iPhone.model}</Link>
                    
                </li>
                ))}
            </ul>
        </div>
        <section style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            {/* iphone categories */}
            <p>iPhone 15 Pro</p>
            <p>iPhone 15</p>
            <p>iPhone 14</p>
            <p>iPhone 13</p>
            <p>iPhone SE</p>
            <p>Compare</p>
            <p>AirPods</p>
            <p>AirTag</p>
            <p>Accessories</p>
            <p>Apple Card</p>
            <p>iOS 18 <span style={{color: 'red'}}>Preview</span></p>
            <p>Shop iPhone</p>
        </section>

        <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>iPhone</h1>
                <h4>Designed to be loved.</h4>


            </div>
     
            <Card >
        {/* <video ref={videoRef} width="100%" height="100%" loop muted>
            <source src="/videos/vision.mp4" type="video/mp4" />
        
        </video> */}
     
            <Card.Body >
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Card.Title>iPhone</Card.Title>
                <Card.Text>
                    Designed to be loved.
                </Card.Text>
                </div>
                
                <video ref={videoRef} style={{width: '100%', height:'900px'}}  loop muted>
                    <source src="/videos/iPhone.mp4" type="video/mp4" />
        
                </video>
                {/* <Card.Title>-LOGO-Vision Pro</Card.Title>
                <Card.Text>
                            You've never seen everything like this before.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
                <Button variant="primary">Buy</Button> */}
                </Card.Body>
            </Card>
        </div>
        <h3>To be continued</h3>
        <FetchExample/>
    </LayoutWhite>

  );
}

export default Iphones;