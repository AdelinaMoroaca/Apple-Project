import React from "react";
import { Layout } from "../../components/Layout";
//firebase
import { ItemsStorePage } from './ItemsStorePage';
import { IntroStoreFirebase } from './IntroStorePage';


function BuyIpad(){
    return(
        <Layout bgThemeVariant="dark" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                <IntroStoreFirebase title='iPad'/>
            </section>
            
            <section style={{margin: '2rem 0'}}>
                <ItemsStorePage categoryItems='iPad'/>
            </section>
        </Layout>
    )
}

export default BuyIpad;