import React from "react";

function StoreProduct(props){
    const { title, image, imgDescription} = props;

    return(
        <div style={{padding: '1rem'}}>
            <img src={image} alt={imgDescription} />
            <p>{title}piu</p>
        </div>
    )
}

export { StoreProduct };