import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function AirPodsPage() {
    return (
        <LayoutWhite>
            <section style={{marginTop: '4rem', padding: '0', width: '100%'}}>
                <PresentationLargeCard 
                    selectedId={'95'} 
                    firstAboutText='A magical connection'
                    secondAboutText='to your devices.'
                />
            </section>
        </LayoutWhite>
    );
}

export { AirPodsPage };