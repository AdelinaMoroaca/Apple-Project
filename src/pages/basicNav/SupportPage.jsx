import React from "react";
import { Layout } from '../../components/Layout';
import WillBeBackPage from '../WillBeBackPage';
// import styles from './SupportPage.module.css'

function SupportPage(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <WillBeBackPage
                pageContent='Support'
            />
        </Layout>

    )
}

export default SupportPage;