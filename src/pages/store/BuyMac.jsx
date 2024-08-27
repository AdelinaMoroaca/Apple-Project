import React from 'react';
import { LayoutWhite } from '../../components/Layout';
import { ProductsStorePage} from './ProductsStorePage';
import { IntroStorePage } from './IntroStorePage';
// import styles from './BuyMac.module.css'; 

function BuyMac() {

    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <IntroStorePage selectedId={1}/> 
            </section>
            <section style={{marginTop: '2rem'}}>
                <ProductsStorePage categoryProductsId={1}/> 
            </section>
        </LayoutWhite>
    );
}

export { BuyMac };
