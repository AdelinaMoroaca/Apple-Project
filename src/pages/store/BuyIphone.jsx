import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../store/Cart/context';
import { LayoutBlack } from "../../components/Layout";
import {Container, Card, Carousel, Button, Col, Row } from 'react-bootstrap';
import { addToCart } from '../../store/Cart/actions';
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
        height: '16rem',
        background: 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
                                        <Row>
                                            <Col Col xs={12} md={6} className="mb-3 mb-md-0"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                            >
                                            {/* <Col xs={12} md={6} className="mb-3 mb-md-0"> */}
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
                                                        </Carousel.Item>
                                                        ))
                                                    ) : (
                                                        <p>No images available</p>
                                                    )}
                                                </Carousel>
                                            </Col>

                                            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                                                <Card.Text>
                                                    <h5 style={{textAlign: 'left'}}>
                                                        Model. 
                                                        <span style={{color: 'gray'}}>Which is best for you?</span>
                                                    </h5>
                                                </Card.Text>

                                                <Card.Text>
                                                    <h6 style={{textAlign: 'left'}}>
                                                        Finish. 
                                                        <span style={{color: 'gray'}}> Pick your favorite.</span> 
                                                    </h6>

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
                                                </Card.Text>

                                                <Card.Text>
                                                    <h6>Storage. 
                                                        <span style={{color: 'gray'}}>How much space do you need?</span>
                                                    </h6>
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
                                                </Card.Text>

                                                <Card.Text>
                                                    <h6>Price: {product.countryValue}{product.price}</h6>
                                                </Card.Text>

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
        </LayoutBlack>
    );
};

export { BuyIphone };
