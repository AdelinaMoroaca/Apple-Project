import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from '../../components/Layout';
import styles from './AirPodsPage.module.css';

function AirPodsPage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={5} 
                />
            </section>
        </LayoutWhite>
    );
}

export { AirPodsPage };