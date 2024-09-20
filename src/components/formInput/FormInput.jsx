import styles from './FormInput.module.css';
const FormInput = ({ label, ...otherProps }) => {
    return (

        // <div className={styles.group}>
        //     <input className="form-input" {...otherProps} />
        //     {label && (
        //         <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        //     )}
        // </div>
        <div className={styles.group}>
            <input className={styles.formInput} {...otherProps} />
            {label && (
                <label
                    className={`${otherProps.value.length ? styles.shrink : ''} ${styles.formInputLabel}`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;