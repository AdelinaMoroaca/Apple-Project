import React from "react";
import { ProductsStorePage } from './ProductsStorePage';
import { IntroStorePage } from './IntroStorePage';
import { LayoutWhite } from "../../components/Layout";

function BuyIpad(){
    return(
        <LayoutWhite>
            <section style={{marginTop: '3rem'}}>
                <IntroStorePage selectedId={2}/> 
            </section>
            <section style={{marginTop: '2rem'}}>
                <ProductsStorePage categoryProductsId={2}/> 
            </section>
        </LayoutWhite>
    )
}

export default BuyIpad;