import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  LayoutWhite } from "../components/Layout";

function Iphone() {
  const { id } = useParams();
  const [iPhone, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/iPhone/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!iPhone) return <div>Loading...</div>;

  return (
    // <>
    <LayoutWhite>
      <div>
        <h1>{iPhone.model}</h1>
        <p>{iPhone.storageSize}</p>
      </div>
    </LayoutWhite>
    
  );
}

export default Iphone;