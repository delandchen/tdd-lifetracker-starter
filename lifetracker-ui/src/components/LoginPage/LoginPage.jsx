import * as React from 'react';
import "./LoginPage.css";
import AuthContext from 'components/contexts/auth';
import { Navigate } from 'react-router-dom';
import apiClient from '../../services/apiClient';

export default function LoginPage({fieldError, setFieldError}) {
    // States for input values
    const { loggedIn, setLoggedIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // Handles input changes
    const handleOnFormChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // Determine which input field needs to be changed
        if (name == "email") {
            setEmail(value);
        }
        else if (name == "password") {
            setPassword(value);
        }
    }

    const signUpUser = async () => {
        const userData = {password: password, email: email}
        const { data, error } = await apiClient.loginUser(userData);

        if (error) {
            setFieldError(error);
        }
        if (data?.user) {
            setLoggedIn(true);
            apiClient.setToken(data.token);
        }
    }

    return (
        <div className='login-page'>
            {loggedIn && <Navigate to="/activity" replace={true} />}
            <div className="card"> 
                <h1> Login </h1>
                <div className='form'>
                    <input onChange={handleOnFormChange} className='form-input' type="email" name="email" placeholder='Enter a valid email' value={email}></input>
                    <input onChange={handleOnFormChange}className='form-input' type="password" name="password" placeholder='Enter a password' value={password}></input>
                    <div className="error">
                        {fieldError ? <p> {fieldError} </p> : null}
                    </div>
                    <button className='submit-login' onClick={signUpUser}> Login </button>
                </div>
            </div>
        </div>
    )
}