import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Spinner, Figure } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';

function NavList({ categoryProductsId }) {
    const apiUrl = `https://json-server-deployment-5til.onrender.com/nav?categoryProductsId=${categoryProductsId}`;
    const { data: models, loading, error } = useFetchData(apiUrl);
    const navigate = useNavigate();

    const handleProduct = (model) => {
        const formattedModelName = model.modelName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${formattedModelName}/`);
    }

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading models. Please try again later.</p>;

    return (
        <Container>
            <Row>
                <Col style={{display: "flex", gap: '20px'}}>
                    {models && models.length > 0 ? (
                        models.map(model => (
                            <Figure 
                                key={model.id}
                                style={{cursor: 'pointer'}}
                                onClick={() => {handleProduct(model)}}
                            >
                                <img 
                                    src={model.image} 
                                    alt={model.modelName} 
                                    // width={40} 
                                    height={50} 
                                />
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
