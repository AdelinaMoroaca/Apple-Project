import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../sesiunea-35/Layout";

function TestAPI() {
  const [iPhone, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/iPhone/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    // <Layout>
        <div>
        <h2>Phones list</h2>
            <ol style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {iPhone.map((iPhone) => (
                <li key={iPhone.id}>
                    <p to={`/posts/${iPhone.id}`}>{iPhone.title}</p>
                </li>
                ))}
            </ol>
        </div>
        
    // </Layout>
  );
}

export default TestAPI;