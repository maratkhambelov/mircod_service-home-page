import React from 'react';
import './Header.scss';
import headerlogo from '../../assets/header-logo.png'
function Header() {
    return (
        <div className="header">
            <div className="header_inner">
                <div className="header_logo">
                    <img src={headerlogo} width={129} />
                    <span className="header_logo_extra-title">FRAMEWORK</span>
                </div>
                <div className="header_login">
                    <span>Sign in</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
