import React, { useState, useEffect } from "react";
import { Link, useParams  } from 'react-router-dom';


function BuyIphone() {
    const [iPhone, setproductCategory] = useState([]);

    function getAppleCategory() {
        fetch("https://json-server-deployment-5til.onrender.com/iPhone")
            .then((response) => response.json())
            .then((data) => {
                setproductCategory(data);
            });
    }

    useEffect(() => {
        getAppleCategory();
    }, []);

    return (
        <div>
            <h1>iPhone STORE</h1>
            <ul>
                {iPhone.map((iPhone) => (
                    <li key={iPhone.id}>
                        <Link to={`/iPhone/${iPhone.id}`}>{iPhone.category} - {iPhone.model}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export { BuyIphone };