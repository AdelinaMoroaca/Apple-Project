import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../../store/Cart/context';
import { LayoutBlack } from "../../components/Layout";
import {Container, Card, Carousel, Button, Col, Row } from 'react-bootstrap';
// import CarouselImage from './../../components/carousel/ExampleCarouselImage';

// import { ThemeContext } from "../store/Theme/context";
// import ProductCard from './../../components/cards/ProductCard';
import { addToCart } from '../../store/Cart/actions';

// import ProductCard from '../../components/cards/ProductCard';
import styles from './BuyIphone.module.css'; 

function BuyIphone(){
  

    const { cartState, cartDispatch } = useContext(CartContext);

    const [products, setProducts] = React.useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});

    useEffect(() => {
        fetch('https://json-server-deployment-5til.onrender.com/iPhone')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAddToCart = (product) => {
        const selected = selectedOptions[product.id] || {};

        if (!selected.finish || !selected.storage) {
            alert('Please select both finish and storage options before adding to cart.');
            return;
        }

        cartDispatch(addToCart({
            ...product,
            finish: selected.finish,
            storage: selected.storage,
        }));

        console.log(`Added ${product.title} with  ${product.price},  ${selected.finish} finish and ${selected.storage} storage to cart`);
        // cartDispatch(addToCart(product));
    
    };

    useEffect(() => {
        console.log(cartState)
    }, [cartState])

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
        height: '250px',
        background: 'lightgray',
        display: 'flex',
        alignItems: 'center',
    
        // height: '200px', background: 'lightgray', display: 'flex', alignItems: 'center', 
        justifyContent: 'center'
    // width='100%' height='250px'
    }

    return (
        <LayoutBlack>
            <section style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
                }}>
                    {/* <ProductCard/> */}
                    <h1><b>iPhone STORE</b></h1>
                     <Container>
                        <Row>
                        {products.map((product) => ( 
                            <Col xs={12} sm={6} className="mb-4" key={product.id}>
                            {/* xs={12} sm={6} md={4} lg={3} */}
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <h1 style={{textAlign: 'left'}}>Buy {product.category}{product.model}</h1>
                                    <p style={{textAlign: 'left'}}>From {product.countryValue}{product.price} or ${product.priceMo}/mo for 24 mo.*</p>
                                <Row >
                                    <Col Col xs={12} md={6} className="mb-3 mb-md-0"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    {/* <Col xs={12} md={6} className="mb-3 mb-md-0"> */}
                                    {/* <h2>jjj</h2> */}
                            
                                    <Carousel>
                                    {Array.isArray(product.imagePath) ? (
                                        product.imagePath.map((path, index) => (
                                        <Carousel.Item key={index} >
                                            <div style={imgStyle}>
                                                <img
                                                src={path}
                                                alt={`iPhone ${product.model}`}
                                                style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                            {/* <img
                                            src={path}
                                            alt={`iPhone ${product.model}`}
                                            style={{ width: '100%', height: 'auto' }}
                                            /> */}
                                        </Carousel.Item>
                                        ))
                                    ) : (
                                    <p>No images available</p>
                                    )}
            
                                        {/* <Carousel.Item>
                                        <CarouselImage text="First slide" />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                        <CarouselImage text="Second slide" />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                        </Carousel.Item> */}
                                    </Carousel>
                                    </Col>
                                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                                    {/* <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center"> */}
                                    {/* <Card.Title>{product.title}</Card.Title> */}
                                    <Card.Text>
                                        <h5 style={{textAlign: 'left'}}>Model. <span style={{color: 'gray'}}>Which is best for you?</span></h5>
                                    </Card.Text>
                                    {/* <Card.Text>
                                        <h4>{product.price}</h4>
                                    </Card.Text> */}
                                    <h6 style={{textAlign: 'left'}}>Finish. <span style={{color: 'gray'}}> Pick your favorite.</span> </h6>
                                    <div>
                                        {product.finishesColor.map((color, index) => (
                                            <label key={index} className={styles.optionLabel}>
                                                <input
                                                    type="radio"
                                                    name={`finish-${product.id}`}
                                                    value={color}
                                                    checked={selectedOptions[product.id]?.finish === color}
                                                    onChange={() => handleOptionChange(product.id, 'finish', color)}
                                                    className={styles.optionInput}
                                                />
                                                {color}
                                            </label>
                                        ))}
                                    </div>

                                    <h6>Storage. <span style={{color: 'gray'}}>How much space do you need?</span></h6>
                                    <div>
                                        {product.storageSize.map((size, index) => (
                                            <label key={index} className={styles.optionLabel}>
                                                <input
                                                    type="radio"
                                                    name={`storage-${product.id}`}
                                                    value={`${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`}
                                                    checked={selectedOptions[product.id]?.storage === `${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`}
                                                    onChange={() => handleOptionChange(product.id, 'storage', `${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`)}
                                                    className={styles.optionInput}
                                                />
                                                {size}{index < product.storageType.length ? product.storageType[index] : 'GB'}
                                            </label>
                                        ))}
                                    </div>
                                    <h6>Price: {product.countryValue}{product.price}</h6>
                                    <Button onClick={()=>handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>                                    
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}

             
                        </Row>
                    </Container>
            </section>
            
            {/* <Container>
                <h1><b>iPhone STORE</b></h1>
                <Row className={styles.row}>
                    {products.map((product) => (
                        <Col className={styles.column} key={product.id}>
                            <Container style={{ backgroundColor: "white", borderRadius: '5px' }}>
                                <h4>{product.title}</h4>
                                <h4>{product.price}</h4>
                                <h5>Model: {product.model}</h5>
                                <h6>Finishes:</h6>
                                <div>
                                    {product.finishesColor.map((color, index) => (
                                        <label key={index} className={styles.optionLabel}>
                                            <input
                                                type="radio"
                                                name={`finish-${product.id}`}
                                                value={color}
                                                checked={selectedOptions[product.id]?.finish === color}
                                                onChange={() => handleOptionChange(product.id, 'finish', color)}
                                                className={styles.optionInput}
                                            />
                                            {color}
                                        </label>
                                    ))}
                                </div>

                                <h6>Storage Sizes:</h6>
                                <div>
                                    {product.storageSize.map((size, index) => (
                                        <label key={index} className={styles.optionLabel}>
                                            <input
                                                type="radio"
                                                name={`storage-${product.id}`}
                                                value={`${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`}
                                                checked={selectedOptions[product.id]?.storage === `${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`}
                                                onChange={() => handleOptionChange(product.id, 'storage', `${size}${index < product.storageType.length ? product.storageType[index] : 'GB'}`)}
                                                className={styles.optionInput}
                                            />
                                            {size}{index < product.storageType.length ? product.storageType[index] : 'GB'}
                                        </label>
                                    ))}
                                </div>
                                <h6>Price: {product.countryValue}{product.price}</h6>
                                <Button onClick={()=>handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                                <h6>Details:</h6>
                                <ul>
                                    {product.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>

                                <h6>Images:</h6>
                                {Array.isArray(product.imagePath) ? ( // Ensure imagePath is an array
                                <ul>
                                    {product.imagePath.map((path, index) => (
                                        <li key={index}>
                                            <img src={path} 
                                            alt={`iPhone ${product.model}`} 
                                            style={{ width: '100px', height: 'auto' }} />
                                        </li>
                                    ))}
                                </ul>
                                ) : (
                                   <p>No images available</p>
                                )}
                            </Container>
                        </Col>
                    ))}
                </Row>
            </Container> */}
        </LayoutBlack>
    );
};

export { BuyIphone };
