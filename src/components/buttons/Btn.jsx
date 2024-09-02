import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Btn.module.css';

function Btn(props) {
  const { variantType, btnText, className, handleOnClick } = props;

  return (
    <Button
      variant={variantType}
      className={`${styles.Btn}  ${className}`}
      onClick={handleOnClick}
      >{btnText}
    </Button>
  );
}

export { Btn };