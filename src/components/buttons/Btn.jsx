import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Btn.module.css';

function Btn(props) {
  const { variantType, navigatePath, btnText, className } = props;
  const navigate = useNavigate();

  function handleOnClick(){
    navigate(navigatePath);
    window.scrollTo(0, 0);
  };

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