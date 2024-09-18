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

const BUTTON_TYPE_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted
}

function BtnDemo({ children, buttonType, ...otherProps }) {
 

  return (
    <button
      className={`${styles.BtnContainer}  ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
      >{ children }
    </button>
  );
}

export { Btn, BtnDemo };