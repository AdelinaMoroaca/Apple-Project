import React from "react";
import { Layout } from '../../components/Layout';
import WillBeBackPage from '../WillBeBackPage'

function Visionpage(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Apple Vision Pro'
            />
   
        </Layout>
    )
}

export default Visionpage;