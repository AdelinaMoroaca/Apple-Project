import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import { NavList } from './../../components/product-list/NavList';
import styles from './IpadPage.module.css';

function IpadPage() {
    const categoryProductsId = 2;  // iPad category ID

    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={categoryProductsId} />
            </section>
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
