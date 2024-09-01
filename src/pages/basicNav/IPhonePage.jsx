import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from '../../components/Layout';
import { NavList } from './../../components/carousel/product-list/NavList';
import styles from './IPhonePage.module.css';

function IPhonePage() {

    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={3} />
            </section>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={3} 
                />
            </section>
        </LayoutWhite>
    );
}

export { IPhonePage };
