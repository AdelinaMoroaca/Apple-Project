import React from "react";
import { Col, Row, Container, Spinner, Figure } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';
// import { CardNav } from "../cards/CardNav";

function NavList({ selectedProductCategory }) {
    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/categoryProducts"
    );

    // Find the category from the data that matches the selectedCategory.id
    // const selectedCategoryData = data 
    //     ? data.find(category => category.details.id === selectedProductCategory.details.id) 
    //     : null;

    // const models = selectedCategoryData ? selectedCategoryData.details.models : [];

        // Ensure data is loaded and selectedCategory exists
        const selectedCategoryData = data && selectedProductCategory 
        ? data.find(category => category.details.id === selectedProductCategory.details.id) 
        : null;

    // If selectedCategoryData exists, use its models; otherwise, set to an empty array
    const models = selectedCategoryData ? selectedCategoryData.details.models : [];
    return (
        <>
            {loading && <Spinner />}
            <Container>
                <Row>
                    <Col>
                    {models.length > 0 
                            ? models.map((model) =>
                                <Figure key={model.id}>
                                    <img src={model.image} alt={model.modelName} width={30} height={40} />
                                    <Figure.Caption>{model.modelName}</Figure.Caption>
                                </Figure>
                              )
                            : <p>No models found for the selected category.</p>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export { NavList };
