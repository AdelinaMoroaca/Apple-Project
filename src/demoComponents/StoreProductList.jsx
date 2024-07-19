import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Figure from 'react-bootstrap/Figure';
// import category from '../../fixtures/db.json';
// import { StoreProduct } from "./StoreProduct";
// import { Card  } from 'react-bootstrap';

import '../demoComponents/StoreProductList.css';

function ProductCategory(props){
    const { category } = props;

    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={category.imagePath}
            />
            <Figure.Caption>
            <Link to={`/shop/buy-iphone/`}>{category.title}</Link>
            </Figure.Caption>
        </Figure>
    )
}

function StoreProductList(props){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://json-server-deployment-5til.onrender.com/category")
            .then((response) => response.json())
            .then((data) => {
                setproductCategory(data);
            });
    }

    useEffect(() => {
        getAppleCategory();
    },[]);

    const newStyle = {
        width: '1500px',
        height: '200px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgreen', // Adjust color as needed
    };

    return (
        <ol id='storeProductList' style={newStyle}>
            {
                category.map((category) => (
                    <ProductCategory key={category.id} 
                        category={category} 
                        alt={category}
                        src={category}
                    />
                ))
            }
     
        </ol>
    )
}


export { StoreProductList };


