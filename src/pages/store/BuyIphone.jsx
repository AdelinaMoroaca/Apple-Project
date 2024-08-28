import React, { useState, useEffect, useContext } from 'react';
import { LayoutBlack } from "../../components/Layout";
import { useFetchData } from '../../utils/hooks/useFetch';
import { addToBag } from '../../store/Shopping/actions';
import { addToFavorite } from '../../store/Favorites/actions';
import { BagContext } from '../../store/Shopping/context';
import { FavoriteContext } from '../../store/Favorites/context';
import {Container, Card, Carousel, Button, Col, Row, Spinner } from 'react-bootstrap';
import RadioFinishesColorBtn from '../../components/buttons/radio/RadioFinishesColorBtn';
import RadioStorageSizeBtn from '../../components/buttons/radio/RadioStorageSizeBtn';
import styles from './BuyIphone.module.css'; 


function BuyIphone(){
    const { bagState, bagDispatch } = useContext(BagContext);
    const { favoriteState, favoriteDispatch } = useContext(FavoriteContext);
    const [selectedOptions, setSelectedOptions] = useState({});

    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/iPhone"
    );

    const handleAddToBag = (product) => {
        const selected = selectedOptions[product.id] || {};
    
        if (!selected.finish || !selected.storageSize) {
            alert('Please select both finish and storage options before adding to cart.');
            return;
        }
    
        bagDispatch(addToBag({
            ...product,
            finish: selected.finish,
            storageSize: selected.storageSize,
        }));
        alert(
            `Added ${product.title} with ${product.price}$, ${selected.finish} finish and ${selected.storageSize} storage to cart`
        )
    };

    useEffect(() => {
        console.log(bagState)
    }, [bagState])

    const handleAddToFavorites = (product) =>{
        const selected = selectedOptions[product.id] || {};

        favoriteDispatch(addToFavorite(product));
        alert(`Added to Favorite ${product.title} with  ${product.price}$,  ${selected.finish} finish and ${selected.storage} storage; Please login to see your favorites`);    

    }

    useEffect(() => {
        console.log(favoriteState)
    }, [favoriteState])



    const handleOptionChange = (iPhoneId, type, value) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [iPhoneId]: {
                ...prevState[iPhoneId],
                [type]: value,
            },
        }));
    };


    const imgStyle= {
        width: '100%',
        height: 'auto',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      
    }

    return (
        <LayoutBlack>
            <section style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3rem'
                }}>
                    <h1 style={{paddingBottom: '2rem'}}><b>Shop iPhone for Education</b></h1>
                    {loading && <Spinner />}
                     <Container>
                        <Row>
                            {data &&
                            data.map((product) => ( 
                                <Col xs={12} sm={6} className="mb-4" key={product.id}>
                                    <Card className={styles.buyCard}
                                        style={{ width: '100%', 
                                                borderRadius: '1rem', 
                                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                                padding: '1rem',
                                                height: '100%'
                                        }} >
               
                                        <Card.Body>                                      
                                            <h1 style={{textAlign: 'left'}}>Buy {product.category}{product.model}</h1>
                                            <p style={{textAlign: 'left'}}>From  {product.countryValue}{product.price} or ${product.priceMo}/mo for 24 mo.*</p>
                                        
                                            <Row>
                                                <Col Col xs={12} md={6} className="mb-4 mb-md-0"
                                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22rem'}}
                                                >
                                                    <div style={{padding: '0.5rem', borderRadius: '0.8rem', border: '1px solid black', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <Carousel style={{height: '100%'}}>
                                                            {Array.isArray(product.imagePath) ? (
                                                                product.imagePath.map((path, index) => (
                                                                <Carousel.Item key={index} >
                                                                    <div style={imgStyle}>
                                                                        <img
                                                                        src={path}
                                                                        alt={`iPhone ${product.model}`}
                                                                        style={{ width: '100%', height: '15rem', borderRadius: '0.8rem' }}
                                                                        />
                                                                    </div>
                                                                </Carousel.Item>
                                                                ))
                                                            ) : (
                                                                <p>No images available</p>
                                                            )}
                                                        </Carousel>
                                                    </div>
                                        
                                                </Col>

                                                <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-left">
                                                <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                                                    <Card.Text style={{marginBottom: '0.2rem'}}>
                                                        <h5 style={{textAlign: 'left'}}>
                                                            Model. 
                                                            <span style={{color: 'gray'}}>Which is best for you?</span>
                                                        </h5>
                                                    </Card.Text>

                                                    <Card.Text style={{marginBottom: '0.2rem'}}>
                                                        <h6 style={{textAlign: 'left'}}>
                                                            Finish. 
                                                            <span style={{color: 'gray'}}> Pick your favorite.</span> 
                                                        </h6>

                                                        <div style={{display: 'flex', gap: '0.3rem', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
                                                            {product.finishesColor.map((color, index) => (
                                                                    <RadioFinishesColorBtn
                                                                        className={styles.optionLabel}
                                                                        key={index}
                                                                        label={color}
                                                                        name={`finish-${product.id}`}
                                                                        value={color}
                                                                        checked={selectedOptions[product.id]?.finish === color}
                                                                        onChange={() => handleOptionChange(product.id, 'finish', color)}
                                                                    />
                                                        
                                                            ))}
                                                        </div>
                                                    </Card.Text>

                                                    <Card.Text style={{marginBottom: '0.2rem'}}>
                                                        <h6 style={{textAlign: 'left'}}>Storage. 
                                                            <span style={{color: 'gray'}}>How much space do you need?</span>
                                                        </h6>

                                                        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                                                            {product.storageSize.map((size, index) => (
                                                                <RadioStorageSizeBtn
                                                                    key={index}
                                                                    label={size}
                                                                    name={`storage-${product.id}`}
                                                                    value={size}
                                                                    checked={selectedOptions[product.id]?.storageSize === size}
                                                                    onChange={() => handleOptionChange(product.id, 'storageSize', size                                                                    )}
                                                                    className={styles.optionLabel}
                                                                />
                                                            ))}
                                                        </div>
                                                    </Card.Text>

                                                    <Card.Text style={{marginBottom: '0.2rem'}}>
                                                        <h5 style={{paddingTop: '0.6rem'}}><b>Price: {product.countryValue}{product.price}</b></h5>
                                                    </Card.Text>

                                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.5rem'}}>
                                                        <Button onClick={()=>handleAddToBag(product)}>
                                                            Add to Bag
                                                        </Button>  

                                                        <Button 
                                                            className={styles.favouritesBtn} 
                                                            onClick={()=>handleAddToFavorites(product)}
                                                            variant="outline-primary"
                                                            >

                                                            <svg viewBox="0 0 35 35" className={styles.favouritesSvg} class="as-svgicon as-svgicon-heart as-svgicon-base as-svgicon-heartbase" 
                                                                role="img" aria-hidden="true" width="28" height="28">
                                                            <path fill="none" d="M0 1.213h35v35H0z"></path>
                                                            <path  className={styles.favouriteSvg} d="M17.5 29.263a1.194 1.194 0 0 1-.85-.352L6.967 19.2a6.531 6.531 0 0 1 .46-9.617 6.708 6.708 0 0 1 8.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 0 1 8.943-.647 6.531 6.531 0 0 1 .46 9.617l-9.683 9.711a1.192 1.192 0 0 1-.85.352Zm-6.06-20a5.154 5.154 0 0 0-3.31 1.167 5.352 5.352 0 0 0-1.948 3.913 5.424 5.424 0 0 0 1.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 0 0 1.564-4.081 5.352 5.352 0 0 0-1.948-3.913 5.6 5.6 0 0 0-7.461.577l-1.7 1.7a.3.3 0 0 1-.425 0l-1.7-1.7a5.89 5.89 0 0 0-4.144-1.741Z"></path></svg>                                 
                                                        </Button>
                                                    </div>            
                                                </div>
     
                                    
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
            </section>
        </LayoutBlack>
    );
};




export { BuyIphone };
