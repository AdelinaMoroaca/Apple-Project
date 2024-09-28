import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from '../../components/Layout';
// import { NavList } from './../../components/carousel/product-list/NavList';
import styles from './IpadPage.module.css';

function IpadPage() {

    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section style={{margin: '1rem 0rem'}}>
                {/* <NavList categoryProductsId={2} /> */}
            </section>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={2} 
                />
            </section>
        </Layout>
    );
}

export { IpadPage };
