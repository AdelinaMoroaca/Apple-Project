import React from "react";
import { Layout } from "../../components/Layout";
import WillBeBackPage from '../WillBeBackPage';

function EntertainmentPage(){
    return(
        <Layout bgThemeVariant="dark" iconColor="gray">
            <WillBeBackPage
                pageContent='Entertainment'
            />
        </Layout>
    )
}

export default EntertainmentPage;