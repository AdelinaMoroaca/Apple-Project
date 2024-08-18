import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import styles from './TvHomePage.module.css';

function TvHomePage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={7} 
                />
            </section>
        </LayoutWhite>
    );
}

export { TvHomePage };