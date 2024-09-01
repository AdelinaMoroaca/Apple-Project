import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from '../../components/Layout';
import { NavList } from './../../components/carousel/product-list/NavList';
import styles from './MacPage.module.css';

function MacPage() {
    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={1} />
            </section>
            <section className={styles.introSection}>
                <PresentationLargeCard 
                    selectedId={1} 
                />
            </section>
        </LayoutWhite>
    );
}

export { MacPage };