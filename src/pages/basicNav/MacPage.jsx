import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import { NavList } from './../../components/product-list/NavList';
// import { useFetchData } from './../../utils/hooks/useFetch'; 
import styles from './MacPage.module.css';

function MacPage() {
    const categoryProductsId = 1;
    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                <NavList categoryProductsId={categoryProductsId} />
            </section>
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