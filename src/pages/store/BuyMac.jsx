import React from 'react';
import { Layout } from '../../components/Layout';
//firebase
import { ItemsStorePage} from './ItemsStorePage';
import { IntroStoreFirebase } from './IntroStorePage';
// import styles from './BuyMac.module.css'; 

function BuyMac() {
    return (
        <Layout bgThemeVariant="dark" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                {/* <IntroStorePage selectedId={1}/>  */}
                <IntroStoreFirebase title='Mac'/>
            </section>
            <section style={{margin: '2rem 0'}}>
                {/* <ProductsStorePage categoryProductsId={1}/>  */}
                <ItemsStorePage categoryItems='Mac'/>
            </section>
        </Layout>
    );
}

export { BuyMac };
