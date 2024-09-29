import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from './../../utils/firebase/firebase';
import FormInput from '../formInput/FormInput';
import { BtnDemo } from '../buttons/Btn';
import styles from './SignUpForm.module.css';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('User creation encountered an error:', error);
            }}
        }

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormFields({ ...formFields, [name]: value });
        }

    return (
        <div className={styles.signUpFormContainer}>
            <h3 className={styles.heading}>Don't have an Apple account?</h3>
            <span>Create yours now.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange} 
                    required 
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    required 
                />

                <FormInput
                    label="Password"
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    required 
                />


                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    required 
                />
                    
                <BtnDemo type='submit'>Sign Up</BtnDemo>
            </form>
        </div>
        ); 
}

export default SignUpForm;