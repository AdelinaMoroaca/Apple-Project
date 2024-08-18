import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import styles from './WatchPage.module.css';

function WatchPage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={4} 
                />
            </section>
        </LayoutWhite>
    );
}

export { WatchPage };