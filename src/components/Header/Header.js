import React from 'react';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className="header_inner">
                <div className="header_logo">
                    {/*<img/>*/}
                </div>
                <div className="header_login">
                    <span>Sign in</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
