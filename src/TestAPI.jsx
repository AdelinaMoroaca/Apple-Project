import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../sesiunea-35/Layout";

function TestAPI() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    // <Layout>
        <div>
        <h2>Posts</h2>
            <ol style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {posts.map((posts) => (
                <li key={posts.id}>
                    <p to={`/posts/${posts.id}`}>{posts.title}</p>
                </li>
                ))}
            </ol>
        </div>
    // </Layout>
  );
}

export default TestAPI;