import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from '../../components/Layout';
// import { NavList } from './../../components/carousel/product-list/NavList';
import styles from './MacPage.module.css';

function MacPage() {
    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section style={{ 
                // width: '100%', maxWidth: '1300px', margin: '0 auto',
                // display: 'flex', justifyContent: 'center',
                // alignItems: 'center'
                }}>
                {/* <NavList categoryProductsId={1} /> */}
            </section>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={1} 
                />
            </section>
        </Layout>
    );
}

export { MacPage };