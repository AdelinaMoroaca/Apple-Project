import React from 'react';
import './RadioFinishesColorBtn.module.css';

function RadioFinishesColorBtn(props) {
  const { label, name, value, checked, onChange } = props;
  return (
    <label className="test-radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="test-radio-input"
      />
      <span className="test-radio-checkmark"></span>
      {label}
    </label>
  );
}

export default RadioFinishesColorBtn;
