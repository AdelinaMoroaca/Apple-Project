import React from "react";
// import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import styles from './StoreProductList.module.css';

function CardNav({selectedProductCategory}){
    const { id, image, modelName } = selectedProductCategory;

    // const handleCategory = (category) => {
    //     console.log(`Added ${category.title} `);

    // }

    return (

        <Figure key={id}>
            <img src={image} alt={modelName} width={30} height={40} />
            <Figure.Caption>{modelName}</Figure.Caption>
                  {/* <Link className={styles.figureLink} 
        //         onClick={()=> handleCategory(category)} 
        //         to={`/shop/buy-${category.title}/`}>
        //         {category.title}
        //         </Link> */}
        </Figure>
    )
}

export { CardNav };