import React from "react";
import { StoreProduct } from "../demoComponents/StoreProduct";

function Storepage(){
    const newStyle = {
        border: '2px solid gray',
        width: '1500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    return(
        <section style={newStyle}>
         
            <StoreProduct
                image = 'P'
                imgDescription = 'desc'
                title = 'iPhone'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'iPad'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'Apple Watch'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'Apple Vision Pro'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'AirPods'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'AirTag'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'Apple TV 4K'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'HomePod'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'Accessories'
            />

            <StoreProduct
                imgSrc = 'P'
                imgDescription = 'desc'
                title = 'Apple Gift Card'
            />
 
        
        
        
        
        </section>
    )

}

export default Storepage;