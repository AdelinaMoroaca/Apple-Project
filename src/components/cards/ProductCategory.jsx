import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import styles from './ProductCategory.module.css';

function ProductCategory(props) {
  const { category } = props;
  const navigate = useNavigate();

  const handleCategory = (category) => {
    console.log(`Category Clicked: ${category.title}`);
    navigate(`/shop/buy-${category.title}/`);
  };

  return (
    <Figure 
      onClick={() => {
        console.log("Figure Clicked");
        handleCategory(category);
      }}
      className={styles.figureCategory}
    >
      <Figure.Image
        className={styles.roundedImage}
        width={120}
        height={78}
        alt="200x130"
        src={category.imagePath}
      />
      <Figure.Caption>
        <Link
          className={styles.figureLink}
          onClick={() => {
            console.log("Link Clicked");
            handleCategory(category);
          }}

          to={`/shop/buy-${category.title}/`}
        >
          {category.title}
        </Link>
      </Figure.Caption>
    </Figure>
  );
}

export { ProductCategory };
