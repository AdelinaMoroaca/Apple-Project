import React from "react";
import '../demoComponents/StoreProductList.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import category from '../../fixtures/db.json';
// import { StoreProduct } from "./StoreProduct";
// import { Card  } from 'react-bootstrap';
// CardBody, CardTitle


function ProductCategory(props){
    const { category } = props;

    return (
        <div style={{padding: '1rem', backgroundColor: 'pink'}}>
            <img src={category.imagePath} alt={category.imagePath} width={'30px'} height={'30px'}/>
            <Link to={`/category/${category.id}`}>{category.title}</Link>
            {/* <li>{category.imagePath}</li> */}

           
        </div>
    )
}

function StoreProductList(props){
    // const { category } = props;

    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("http://localhost:3000/category")
        .then((response) => response.json())
        .then((data) => {
            setproductCategory(data)
        })
       
    }

    useEffect(() => {
        getAppleCategory();
    },[]);

    const newStyle = {
        // border: '2px solid gray',
        width: '1500px',
        height: ' 200px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'space-around',
    }

    return (   
            <ol id= 'storeProductList' style={{newStyle}}>
                {
                    category.map((category) => {
                        // return <li style={{listStyle}} key={category.id}>{category.title} </li>
                        return <ProductCategory key={category.id} 
                        category={category} 
                        alt={category}
                        src={category}
                        />
                    })
                }
            </ol>
    )
}

export default StoreProductList
