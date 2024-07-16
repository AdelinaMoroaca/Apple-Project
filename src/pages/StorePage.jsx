import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { StoreProduct } from "../demoComponents/StoreProduct";
import StoreProductList from "../demoComponents/StoreProductList";
import LayoutWhite from "../components/LayoutWhite";

function Storepage(){
    const [category, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://d903-2a02-2f0a-5204-b100-185a-eac5-4c63-ec55.ngrok-free.app/category")
        .then((response) => response.json())
        .then((data) => {
            setproductCategory(data)
        })
       
    }

    useEffect(() => {
        getAppleCategory();
    },[]);

    const newStyle = {
        border: '2px solid gray',
        width: '1500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        // height: '300px',
        padding: '10px',
        gap: '20px',
    }
    return(
        <LayoutWhite>
        <section style={newStyle}>
            <h1>Category</h1>
       

            <StoreProductList category={category} />   
            <Link to={`/category/${category.id}`}>{category.title}</Link> 

            <ul>
                {/* <StoreProductList */}
                {category.map((category) => (
                    <li style={{color: 'white'}} key={category.id}>
                         <Link style={{color: 'white'}} to={`/category/${category.id}`}>{category.title}</Link> 
                    </li>
                ))} 
                {/* />  */}
            </ul>
            {/* <Iphone/> */}
        </section>

        </LayoutWhite>
    )

}

export default Storepage;