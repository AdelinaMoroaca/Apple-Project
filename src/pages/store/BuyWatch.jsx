import React from "react";
import { Layout } from "../../components/Layout";
//firebase
import { IntroStorePage } from './IntroStorePage';
import { ItemsStorePage } from './ItemsStorePage';


function BuyWatch(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                <IntroStorePage title='Apple Watch'/>
            </section>

            <section style={{margin: '2rem 0'}}>
                <ItemsStorePage categoryItems='Apple Watch'/>
            </section>
        </Layout>
    )
}

export default BuyWatch;