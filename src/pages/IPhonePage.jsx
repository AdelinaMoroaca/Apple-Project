import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function IPhonePage() {
    return (
        <LayoutWhite>
            <section style={{marginTop: '4rem', padding: '0', width: '100%'}}>
                <PresentationLargeCard 
                    selectedId={'93'} 
                    firstAboutText='Designed to be loved.'
                />
            </section>
        </LayoutWhite>
    );
}

export { IPhonePage };
