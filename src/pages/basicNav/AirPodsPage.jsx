import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from '../../components/Layout';

// firebase
import { ItemsStorePage } from '../../pages/store/ItemsStorePage';
import styles from './AirPodsPage.module.css';

function AirPodsPage() {
    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section className={styles.introSection}>
                <PresentationLargeCard selectedId={5} />
            </section>

            <section style={{margin: '2rem 0'}}>
                <ItemsStorePage categoryItems='AirPods'/>
            </section>
        </Layout>
    );
}

export { AirPodsPage };