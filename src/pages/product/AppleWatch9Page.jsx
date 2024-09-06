import React from "react";
import { Layout } from '../../components/Layout';
import WillBeBackPage from '../WillBeBackPage';



function AppleWatch9Page(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Apple Watch Series 9'
            />
        </Layout>
    )
}

export default AppleWatch9Page;