import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from '../../components/Layout';
import { NavList } from './../../components/carousel/product-list/NavList';
import styles from './IpadPage.module.css';

function IpadPage() {

    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={2} />
            </section>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={2} 
                />
            </section>
        </LayoutWhite>
    );
}

export { IpadPage };
