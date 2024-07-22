import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Figure from 'react-bootstrap/Figure';
// import category from '../../fixtures/db.json';
// import { StoreProduct } from "./StoreProduct";
// import { Card  } from 'react-bootstrap';

import './../pages/StoreProductList.css';

function ProductCategory(props){
    const { category } = props;

    const handleCategory = (category) => {
        console.log(`Added ${category.title} `);

    }

    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={category.imagePath}
            />
            <Figure.Caption>
            <Link onClick={()=> handleCategory(category)} to={`/shop/buy-${category.title}/`}>{category.title}</Link>
            </Figure.Caption>
        </Figure>
    )
}

function StoreProductList(){
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


