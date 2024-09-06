import React from "react";
import { Layout } from "../../components/Layout";
import WillBeBackPage from '../WillBeBackPage';

function AccessoriesPage(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Accessories'
            />
        </Layout>
    )
}

export default AccessoriesPage;