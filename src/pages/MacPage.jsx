import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";
import styles from './MacPage.module.css';

function MacPage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={'91'} 
                    firstAboutText='If you can dream it,'
                    secondAboutText=' Mac can do it.'    
                />
            </section>
        </LayoutWhite>
    );
}

export { MacPage };