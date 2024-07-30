import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function TvHomePage() {
    return (
        <LayoutWhite>
            <section style={{marginTop: '4rem', padding: '0', width: '100%'}}>
                <PresentationLargeCard 
                    selectedId={'97'} 
                    firstAboutText='The future hits home.'
                    secondAboutText='On the big screen.'
                />
            </section>
        </LayoutWhite>
    );
}

export { TvHomePage };