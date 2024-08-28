import React from 'react';
import styles from './RadioStorageSizeBtn.module.css';

function RadioStorageSizeBtn(props) {
  const { label, name, value, checked, onChange, className } = props;
    return (
        <label className={`${styles.optionLabel} ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.optionInput}
            />
            {label}
        </label>
    );
}

export default RadioStorageSizeBtn;
