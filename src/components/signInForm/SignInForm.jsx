import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import FormInput from '../formInput/FormInput';
import { BtnDemo } from '../buttons/Btn';
import styles from './SignInForm.module.css';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                await signInAuthUserWithEmailAndPassword(email, password);
                resetFormFields();

            } catch (error) {
                switch(error.code) {
                    case 'auth/invalid-credential':
                        alert('Invalid credentials');
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                    default:
                        console.log(error);
                }
            }
        }

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormFields({ ...formFields, [name]: value });
        }


        return (
                <div className={styles.signUpFormContainer}>
                    <h2 className={styles.heading}>Already have an account?</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={handleSubmit}>
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

                        <div className={styles.buttonsContainer}>
                            <BtnDemo type='submit'>Sign In</BtnDemo>
                            <BtnDemo type='button' buttonType='google' onClick={signInWithGoogle}>GOOGLE Sign In</BtnDemo>
                        </div>
                     
                    </form>
                </div>
        );
    
}

export default SignInForm;