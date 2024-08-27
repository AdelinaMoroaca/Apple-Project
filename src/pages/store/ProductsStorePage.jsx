import React from "react";
import { Col, Row, Container, Spinner, Figure, Card } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';

function ProductsStorePage({ categoryProductsId }) {
    const apiUrl = `https://json-server-deployment-5til.onrender.com/products?categoryProductsId=${categoryProductsId}`;
    const { data: products, loading, error } = useFetchData(apiUrl);

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading models. Please try again later.</p>;

    return (
        <Container>
             <h3>All models. <span>Take your pick.</span></h3>
            {products && products.length > 0 ? (
                <Row>
                    {products.map(product => (
                        <Col xs={12} sm={6} md={6} lg={6} className="mb-4" key={product.id}>
                            <Card>
                                <Card.Body>
                                    <Figure>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={product.imagePath}
                                        />
                                        <Figure.Caption>
                                            {product.productsClass}
                                        </Figure.Caption>
                                    </Figure>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <p>No models found for this category.</p>
            )}
        </Container>
    );
}

export { ProductsStorePage };
