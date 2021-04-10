import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='signup-card'>
                    <div className='signup-image'>
                    </div>
                    <p className='signup-text'>Sign In to Game Sense</p>
                    <p className='alt-text'>Don't have an account? 
                    <Link to='/signup' className='linker'>
                        <span>Sign Up</span>
                    </Link>
                    </p>
                    <form 
                    className='form'
                    autoComplete='off'>
                        <div className='email-container'>
                            <p>E-mail</p>
                            <input 
                                className='email-input'
                                type='email'
                                placeholder='name@mail.com'
                            />
                        </div>
                        <div className='password-container'>
                            <p>Password</p>
                            <input 
                                className='password-input'
                                type='password'
                                placeholder='6+ characters'
                            />
                        </div>
                        <div className='button-container'>
                            <button type='submit'
                            onClick={(e) => e.preventDefault()}>Sign In</button>
                        </div>
                        <div className='btn2 button-container'>
                            <button type='submit'
                            onClick={(e) => e.preventDefault()}>
                            <img 
                                src='https://cdn.worldvectorlogo.com/logos/google-icon.svg'
                                alt='google'
                            />
                            Sign in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;