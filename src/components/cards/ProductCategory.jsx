import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import styles from './ProductCategory.module.css';


function ProductCategory(props){
  const { category } = props;

  const handleCategory = (category) => {
      console.log(`Added ${category.title}`);
  }

  return (
      <Figure className={styles.figureCategory}>
          <Figure.Image
              className={styles.roundedImage}
              width={120}
              height={78}
              alt="200x130"
              src={category.imagePath}
          />
          <Figure.Caption>
              <Link className={styles.figureLink} onClick={() => handleCategory(category)} to={`/shop/buy-${category.title}/`}>
                  {category.title}
              </Link>
          </Figure.Caption>
      </Figure>
  )
}

export {ProductCategory}