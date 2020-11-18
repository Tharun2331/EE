import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='data:image/jpeg;base64,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' 
               alt="" />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
