import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LayoutBlack, LayoutWhite } from "../components/Layout";


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
    </LayoutWhite>

  );
}

export default Iphones;