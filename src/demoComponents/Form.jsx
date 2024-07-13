import React, { useState} from "react";

function Form(){
    const [formValue, setFormValue] = useState({
        username: '',
        email: '',
        password: '',
    });

    // state pt errori: formErrors, passFormmError daca formError.pass = true nu permiti unsubmitt

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // if()....

        setFormValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    }



    return(
        <div>
            <h4>Login</h4>
            <form autoComplete="off"

            onSubmit={() => alert(`You have submitted (${formValue.username})`)}

            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
            }}>
                <input
                    type = 'text'
                    name = 'username'
                    value = {formValue.username}
                    onChange = {handleInputChange}
                    onBlur = {() => console.log('echivalentul ev change')} 
                    placeholder = 'Type your username here...'
                />

                <input
                    type = 'email'
                    name = 'email'
                    value = {formValue.email}
                    onChange = {handleInputChange}
                    onBlur = {() => console.log('echivalentul ev change')} 
                    placeholder = 'Type your email here...'
                />

                <input
                    type = 'password'
                    name = 'password'
                    value = {formValue.password}
                    onChange = {handleInputChange}
                    onBlur = {() => console.log('echivalentul ev change')} 
                    placeholder = 'Type your password here...'
                />

                <p>
                    Username: {formValue.username}, 
                    Email: {formValue.email}, 
                    Pass: {formValue.password}
                </p>

                <p>Errors</p>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
       
    )
}

function InputValidator(){

    const [inputValue, setInputValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [showError, setShowError] = useState(false);
    // function handleInputChange(e){
    //     const value = e.target.value;

    //     setFormValue(value)
    // }

    function handleInputChange(e){
        const value = e.target.value;

        if(value.length < 8 || value.length > 16){
            setErrorMsg('Parola tb sa fie intre 8-16 caractere');

            setShowError(true);
        } else {
            setErrorMsg(value);

            setShowError(false);

        }

        setInputValue(value);

    }

    return(
        <div style={{display: 'flex', 
        flexDirection: 'column',
        
        }}>
            <input
                type = 'password'
                name = 'password'
                value = {inputValue}
                onChange = {handleInputChange}
                onBlur = {() => console.log('echivalentul ev change')} 
                placeholder = 'Type your password here...'
            />

            <span style={{
                display: showError ? 'block' : 'none'
            }}> Eroare {errorMsg}</span>
        </div>

    )
}

export { Form , InputValidator};