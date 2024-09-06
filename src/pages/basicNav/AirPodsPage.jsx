import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from '../../components/Layout';
import styles from './AirPodsPage.module.css';

function AirPodsPage() {
    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section className={styles.introSection}>
                <PresentationLargeCard selectedId={5} />
            </section>
        </Layout>
    );
}

export { AirPodsPage };