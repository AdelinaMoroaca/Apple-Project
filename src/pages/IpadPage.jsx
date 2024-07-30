import React from 'react';
import PresentationLargeCard from '../components/cards/PresentationLargeCard';
import { LayoutWhite } from "../components/Layout";

function IpadPage() {
    return (
        <LayoutWhite>
            <section style={{padding: '4rem 0rem 0rem 0rem', width: '100%'}}>
                <PresentationLargeCard 
                    selectedId={'92'} 
                    firstAboutText='Touch, draw, and type'
                    secondAboutText='on one magical device.'
                />
            </section>
        </LayoutWhite>
    );
}

export { IpadPage };