import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import VideoCardComponent from './../components/cards/VideoCardNew';
import { LayoutWhite } from "../components/Layout";

function IPhonePage() {
    // const idToDisplay = "92"; // Ensure this ID exists in your data and is a string
    return (
        <LayoutWhite>
            <Container>
                <h1>iPhone</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <VideoCardComponent selectedId={'93'} />
                    </Col>
                    <Col>
                        <VideoCardComponent />
                    </Col>
                </Row>
            </Container>
        </LayoutWhite>
    );
}

export { IPhonePage };
