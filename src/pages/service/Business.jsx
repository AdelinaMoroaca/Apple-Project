import React from "react";
import { Layout } from '../../components/Layout';
import WillBeBackPage from '../WillBeBackPage'



function Business(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Apple Business'
            />
   
        </Layout>
    )
}

export default Business;