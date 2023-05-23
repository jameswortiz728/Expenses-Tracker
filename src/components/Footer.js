import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
         <footer className="footer">
            <div className="content-container">
                <Link to="https://www.jwortiz.dev/"><h1>Return to JWOrtiz.dev</h1></Link>
            </div>
        </footer>
    )
}

export default Footer;