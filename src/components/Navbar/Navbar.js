import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <h2>Game Sense</h2>
                <div className="input navbar-input">
                    <FontAwesomeIcon icon={faSearch } className="icon"/>
                    <input 
                        placeholder="Search games.."
                        className="navbar-search"
                    />
                </div>
                <div className="sub-container">
                    <Link 
                    className='linker'
                    to='/signup'>
                         <button className="navbar-btn">Sign Up</button>
                    </Link>
                    <Link className='linker' to='/login'>
                        <button className="navbar-btn">Log In</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;