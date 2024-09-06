import React from "react";
import { ProductsStorePage } from './ProductsStorePage';
import { IntroStorePage } from './IntroStorePage';
import { Layout } from "../../components/Layout";

function BuyIpad(){
    return(
        <Layout bgThemeVariant="dark" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                <IntroStorePage selectedId={2}/> 
            </section>
            <section style={{marginTop: '2rem'}}>
                <ProductsStorePage categoryProductsId={2}/> 
            </section>
        </Layout>
    )
}

export default BuyIpad;