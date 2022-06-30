import * as React from 'react';
import './RegistrationPage.css'
import { Navigate } from 'react-router-dom';
import AuthContext from 'components/contexts/auth';

export default function RegistrationPage({handleRegistrationPost, fieldError, setFieldError}) {
    // States for input field values
    const { loggedIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordConfirm, setPasswordConfirm] = React.useState("")

    // Handles input field changes
    const handleOnFormChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        // Switch case to determine which input field state needs to change
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "username":
                setUsername(value);
                break;
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "passwordConfirm":
                setPasswordConfirm(value);
                break;
        }
    }

    const signUpUser = async () => {
        if (password != passwordConfirm) {
            setFieldError("Passwords do not match");
            return;
        }
        else {
            setFieldError("");
        }

        handleRegistrationPost(username, password, email, firstName, lastName);
    }

    return (
        <div className='registration-page'>
            {loggedIn && <Navigate to="/activity" replace={true} />}
            <div className="card"> 
                <h1> Register </h1>
                <div className='form'>
                    <input onChange={handleOnFormChange} className='form-input' type="email" name="email" placeholder='Enter a valid email' value={email}></input>
                    <input onChange={handleOnFormChange} className='form-input' type="text" name="username" placeholder='Enter a username' value={username}></input>
                    <div className='split-input-field'>
                        <input onChange={handleOnFormChange} className='form-input' type="text" name="firstName" placeholder='First name' value={firstName}></input>
                        <input onChange={handleOnFormChange} className='form-input' type="text" name="lastName" placeholder='Last name' value={lastName}></input>
                    </div>
                    <input onChange={handleOnFormChange}className='form-input' type="password" name="password" placeholder='Enter a password' value={password}></input>
                    <input onChange={handleOnFormChange} className='form-input' type="password" name="passwordConfirm" placeholder='Confirm your password' value={passwordConfirm}></input>
                    <div className="error">
                        {fieldError ? <p> {fieldError} </p> : null}
                    </div>
                    <button className='submit-registration' onClick={signUpUser}> Create Account </button>
                </div>
            </div>
        </div>
    )
}