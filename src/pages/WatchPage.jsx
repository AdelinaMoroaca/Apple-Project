import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function WatchPage() {
    return (
        <LayoutWhite>
            <section style={{marginTop: '4rem', padding: '0', width: '100%'}}>
                <PresentationLargeCard 
                    selectedId={'94'} 
                    firstAboutText='To wear it is to love it.'
                />
            </section>
        </LayoutWhite>
    );
}

export { WatchPage };