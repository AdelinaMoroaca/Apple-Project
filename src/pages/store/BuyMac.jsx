import React from 'react';
import { Layout } from '../../components/Layout';
import { ProductsStorePage} from './ProductsStorePage';
import { IntroStorePage } from './IntroStorePage';
// import styles from './BuyMac.module.css'; 

function BuyMac() {
    return (
        <Layout bgThemeVariant="dark" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                <IntroStorePage selectedId={1}/> 
            </section>
            <section style={{marginTop: '2rem'}}>
                <ProductsStorePage categoryProductsId={1}/> 
            </section>
        </Layout>
    );
}

export { BuyMac };
