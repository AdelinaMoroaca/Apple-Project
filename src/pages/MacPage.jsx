import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function MacPage() {
    return (
        <LayoutWhite>
            <section style={{padding: '4rem 0rem 0rem 0rem', width: '100%'}}>
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