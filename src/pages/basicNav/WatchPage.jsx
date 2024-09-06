import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from "../../components/Layout";
import styles from './WatchPage.module.css';

function WatchPage() {
    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section className={styles.introSection}>
                <PresentationLargeCard selectedId={4} />
            </section>
        </Layout>
    );
}

export { WatchPage };