import React from "react";
import { Layout } from '../../components/Layout';
import WillBeBackPage from '../WillBeBackPage'

function ApplyAppleCard(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Sign in to apply for Apple Card'
            />
   
        </Layout>
    )
}

export default ApplyAppleCard;