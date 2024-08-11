import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import { NavList } from './../../components/product-list/NavList';
import styles from './IPhonePage.module.css';

function IPhonePage() {
    const categoryProductsId = 3; 

    return (
        <LayoutWhite>
         <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={categoryProductsId} />
            </section>
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
