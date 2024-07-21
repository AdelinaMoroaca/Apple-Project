import React from "react";
import Container from 'react-bootstrap/Container';

function WillBeBackPage(props){
    const { pageContent } = props;
    return(
        <Container>
            <h1>LOGO</h1>
            <h1>We'll be back.</h1>
            <h4>We're busy updating the</h4>
            <h2>{pageContent} website</h2>
            <h4>and will be back soon</h4>
        </Container>
   
    )
}

export default WillBeBackPage;