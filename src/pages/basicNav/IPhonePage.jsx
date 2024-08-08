import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import styles from './IPhonePage.module.css';

function IPhonePage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={'93'} 
                    firstAboutText='Designed to be loved.'
                />
            </section>
        </LayoutWhite>
    );
}

export { IPhonePage };
