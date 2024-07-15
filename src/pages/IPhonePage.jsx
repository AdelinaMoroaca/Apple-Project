import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutWhite from "../components/LayoutWhite";


function Iphones() {
    const [iPhone, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("http://localhost:3000/iPhone")
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