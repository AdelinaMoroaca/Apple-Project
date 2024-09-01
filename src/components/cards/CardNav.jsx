import React from "react";
import Figure from 'react-bootstrap/Figure';
import styles from './CardNav.module.css';

function CardNav({ selectedProductCategory }) {
    if (!selectedProductCategory) {
        return null;
    }

    const { onClick, className, imgClassName, captionClassName, image, alt, caption } = selectedProductCategory;

    return (
        <Figure
            onClick={onClick}
            className={`${styles.figureContainer} ${className}`}
        >
            <img
                src={image}
                alt={alt}
                className={`${styles.figureImg} ${imgClassName}`}
            />
            
            <Figure.Caption className={`${styles.figureCaption} ${captionClassName}`}>
                {caption}
            </Figure.Caption>
        </Figure>
    )
}

export { CardNav };