import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { Layout } from "../../components/Layout";
import styles from './TvHomePage.module.css';

function TvHomePage() {
    return (
        <Layout bgThemeVariant="light" iconColor="gray">
            <section className={styles.introSection}>
                <PresentationLargeCard selectedId={7} />
            </section>
        </Layout>
    );
}

export { TvHomePage };