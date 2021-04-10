import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='signup-card'>
                    <div className='signup-image'>
                    </div>
                    <p className='signup-text'>Sign Up to Game Sense</p>
                    <p className='alt-text'>Already a member? 
                    <Link
                        className='linker'
                        to='/login'
                    >
                        <span>Sign In</span>
                    </Link>
                    </p>
                    <form 
                    className='form'
                    autoComplete='off'>
                      <div className='name-container'>
                        <div className='firstname-container'>
                        <p>First Name</p>
                        <input 
                            className='firstname-input'
                        />
                    </div>
                     <div className='lastname-container'>
                        <p>Last Name</p>
                        <input 
                            className='lastname-input'
                        />
                     </div>
                  </div>
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
                            onClick={(e) => e.preventDefault()}>Create an account</button>
                        </div>
                        <div className='btn2 button-container'>
                            <button type='submit'
                            onClick={(e) => e.preventDefault()}>
                            <img 
                                src='https://cdn.worldvectorlogo.com/logos/google-icon.svg'
                                alt='google'
                            />
                            Sign up with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;