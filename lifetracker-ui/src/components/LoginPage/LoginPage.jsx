import * as React from 'react';
import "./LoginPage.css";

export default function LoginPage() {
    // States for input values
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // Handles input changes
    const handleOnFormChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // Determine which input field needs to be changed
        if (name = "email") {
            setEmail(value);
        }
        else {
            setPassword(value);
        }
    }

    return (
        <div className='login-page'>
            <div className="card"> 
                <h1> Login </h1>
                <div className='form'>
                    <input onChange={handleOnFormChange} className='form-input' type="email" name="email" placeholder='Enter a valid email' value={email}></input>
                    <input onChange={handleOnFormChange}className='form-input' type="password" name="password" placeholder='Enter a password' value={password}></input>
                </div>
            </div>
        </div>
    )
}