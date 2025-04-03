import React, { useContext, useRef } from 'react'
import logo from '../../assets/wehr-logo.svg'
import pattern from '../../assets/wehr-pattern.svg'
import { Navigate } from 'react-router';
import { LoginContext } from '../../contexts/LoginContext';

const Login = ({credentials}) => {

    const { userLoggedIn, setUserLoggedIn } = useContext(LoginContext);

    const companyId = useRef();
    const password = useRef();
    const rememberMe = useRef();

    const loginHandler = (e) => {
        e.preventDefault();       
        if(credentials.companyId == companyId.current.value && credentials.password == password.current.value) {
            alert('Logged in successfully');
            localStorage.setItem('isLoggedIn','true');
            setUserLoggedIn(true);
            rememberMe.current.checked ? localStorage.setItem('rememberMe', 'true') :localStorage.removeItem('rememberMe');
        } else {
            alert('Invalid credentials');
        }
    }

    return userLoggedIn ? <Navigate to={'/'}/> : (
        <div className='login'>
            <div className="form-wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    Your Logo
                </div>
                <h1 className='form-title'>Sign Into <br /><span>Your Account</span></h1>
                <form onSubmit={loginHandler}>
                    <input type="text" placeholder='Company ID' ref={companyId} required/>
                    <input type="password" placeholder='Password' ref={password} required/>
                    <div className="remember-me">
                        <input type="checkbox" id='remember' ref={rememberMe} />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button type='submit'>Sign in</button>
                </form>
            </div>
            <div className="pattern">
                <figure>
                    <img src={pattern} alt="wehr-pattern" />
                </figure>
            </div>
        </div>
    )
}

export default Login