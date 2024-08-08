import React from 'react';
import PresentationLargeCard from '../../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../../components/Layout";
import { NavList } from './../../components/product-list/NavList';
import { useFetchData } from './../../utils/hooks/useFetch'; 
import styles from './MacPage.module.css';

function MacPage() {
    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/categoryProducts"
    );
    return (
        <LayoutWhite>
            <section style={{marginTop: '2rem'}}>
                 {/* Pass the first object from the data array as a prop once the data is loaded */}
                 {!loading && data && data.length > 0 && (
                <NavList selectedProductCategory={data[1]} />
            )}
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