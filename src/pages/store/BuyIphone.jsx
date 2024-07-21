import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../../store/Cart/context';
import { LayoutBlack } from "../../components/Layout";
// import { ThemeContext } from "../store/Theme/context";
import styles from './BuyIphone.module.css'; 
import { addToCart } from '../../store/Cart/actions';

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

    return (
        <LayoutBlack>
            <Container>
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
            </Container>
        </LayoutBlack>
    );
};

export { BuyIphone };
