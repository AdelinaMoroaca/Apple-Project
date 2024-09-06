import React from "react";
import WillBeBackPage from '../WillBeBackPage';
import { Layout } from "../../components/Layout";

function BuyWatch(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Apple Watch STORE'
            />
        </Layout>
    )
}

export default BuyWatch;