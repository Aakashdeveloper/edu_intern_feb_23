import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <div id="brand">
                    Developer Funnel &nbsp;&nbsp; 
                    <Link className='btn btn-info' to="/">Home</Link>
                </div>
                <div id="social">
                   <Link to="register" className='btn btn-primary'>
                       <span className="glyphicon glyphicon-user"></span> Sign Up
                    </Link> &nbsp;
                    <Link to="login" className='btn btn-success'>
                       <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;