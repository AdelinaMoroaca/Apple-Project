import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Btn.module.css';

function Btn(props) {
  const { variantType, navigatePath, btnText, className } = props;
  const navigate = useNavigate();
  
  return (
    <Button
    //  xs={12} md={6}
    variant={variantType}
    // id={id}
    className={`${styles.Btn}  ${className}`}
    onClick={() => navigate(navigatePath)}
    >{btnText}</Button>
  );
}



export { Btn };