import React from 'react';
import { Layout } from '../../components/Layout';
//firebase
import { ItemsStorePage } from './ItemsStorePage';
import { IntroStorePage } from './IntroStorePage';
// import styles from './BuyMac.module.css'; 

function BuyMac() {
    return (
        <Layout bgThemeVariant="dark" iconColor="gray">
            <section style={{marginTop: '3rem'}}>
                <IntroStorePage title='Mac'/>
            </section>
            <section style={{margin: '2rem 0'}}>

                <ItemsStorePage categoryItems='Mac'/>
            </section>
        </Layout>
    );
}

export { BuyMac };
