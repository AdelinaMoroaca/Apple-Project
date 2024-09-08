import React from "react";
import WillBeBackPage from '../WillBeBackPage';
import { Layout } from "../../components/Layout";

function IpadProPage(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='iPad Pro'
            />
        </Layout>
    )
}

export default IpadProPage;