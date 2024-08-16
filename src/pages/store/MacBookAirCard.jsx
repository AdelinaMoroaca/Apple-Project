import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import styles from './MacBookAirCard.module.css'; 

function MacBookAirCard({ product }) {
    return (
        <Card 
        // className={styles.macBookAirCard}
        >
            <Card.Img variant="top" src={product.imageUrl} alt={product.title} 
            // className={styles.productImage} 
            />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.modelName}</Card.Subtitle>
                {/* <Card.Text>
                    {product.description}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price:</strong> ${product.price}</ListGroupItem>
                    <ListGroupItem><strong>Processor:</strong> {product.specifications.processor}</ListGroupItem>
                    <ListGroupItem><strong>Memory:</strong> {product.specifications.memory}</ListGroupItem>
                    <ListGroupItem><strong>Storage:</strong> {product.specifications.storage}</ListGroupItem>
                    <ListGroupItem><strong>Graphics:</strong> {product.specifications.graphics}</ListGroupItem>
                </ListGroup> */}
                {/* <Button variant="primary" onClick={() => alert(`Added ${product.title} to your bag!`)}>Add to Bag</Button> */}
                {/* <Button variant="secondary" onClick={() => alert(`Added ${product.title} to your favorites!`)} className="ml-2">Add to Favorites</Button> */}
            </Card.Body>
        </Card>
    );
}

export default MacBookAirCard;
