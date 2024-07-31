import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";
import styles from './IpadPage.module.css';

function IpadPage() {
    return (
        <LayoutWhite>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={'92'} 
                    firstAboutText='Touch, draw, and type'
                    secondAboutText='on one magical device.'
                />
            </section>
        </LayoutWhite>
    );
}

export { IpadPage };