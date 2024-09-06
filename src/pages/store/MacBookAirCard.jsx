import React from 'react';
import { Card } from 'react-bootstrap';
// import styles from './MacBookAirCard.module.css'; 

function MacBookAirCard({ product }) {
    return (
        <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.modelName}</Card.Subtitle>
              </Card.Body>
        </Card>
    );
}

export default MacBookAirCard;
