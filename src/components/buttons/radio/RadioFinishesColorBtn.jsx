import React from 'react';
import styles from './RadioFinishesColorBtn.module.css';

function RadioFinishesColorBtn(props) {
  const { label, name, value, checked, onChange } = props;
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radioInput}
      />
      <span className={styles.radioCheckmark}></span>
      {label}
    </label>
  );
}

export default RadioFinishesColorBtn;
