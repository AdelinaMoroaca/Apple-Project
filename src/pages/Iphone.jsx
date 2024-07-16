import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutWhite from "../components/LayoutWhite";

function Iphone() {
  const { id } = useParams();
  const [iPhone, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://d903-2a02-2f0a-5204-b100-185a-eac5-4c63-ec55.ngrok-free.app/iPhone/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!iPhone) return <div>Loading...</div>;

  return (
    <LayoutWhite>
      <div>
        <h1>{iPhone.model}</h1>
        <p>{iPhone.storageSize}</p>
      </div>
    </LayoutWhite>
  );
}

export default Iphone;