import React from "react";
import { Col, Row, Container, Spinner, Figure } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';

function NavList({ categoryProductsId }) {
    const apiUrl = `https://json-server-deployment-5til.onrender.com/models?categoryProductsId=${categoryProductsId}`;
    const { data: models, loading, error } = useFetchData(apiUrl);

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading models. Please try again later.</p>;

    return (
        <Container>
            <Row>
                <Col>
                    {models && models.length > 0 ? (
                        models.map(model => (
                            <Figure key={model.id}>
                                <img src={model.image} alt={model.modelName} width={30} height={40} />
                                <Figure.Caption>{model.modelName}</Figure.Caption>
                            </Figure>
                        ))
                    ) : (
                        <p>No models found for this category.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export { NavList };
