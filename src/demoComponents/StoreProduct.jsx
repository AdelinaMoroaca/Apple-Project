import React from "react";
// import Figure from 'react-bootstrap/Figure';

function StoreProduct(props){
    const { title, image, imgDescription} = props;

    return(
        <>
        <div style={{padding: '1rem'}}>
            <img src={image} alt={imgDescription} />
            <p>{title}</p>
        </div>

        {/* <Figure>
         <Figure.Image
           width={171}
           height={180}
           alt="171x180"
           src="/images/iPhone/15Pro/15pro-2.JPG"
         />
         <Figure.Caption>
           Nulla vitae elit libero, a pharetra augue mollis interdum.
         </Figure.Caption>
       </Figure> */}

       </>
    )
}

export { StoreProduct };