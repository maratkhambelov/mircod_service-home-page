import React from 'react';
import './Footer.scss';

const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footer_inner">
                <div className="footer_main">
                    <div className="footer_main_section footer_about-us">
                        <div className="footer_about-us_title footer_title">ABOUT US
                        </div>
                        <div className="footer_about-us_text footer_subtext">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sectetur, adipisci velit, sed quia non numquam eius .
                        </div>
                    </div>
                    <div className="footer_main_section footer_categories">
                        <div className="footer_categories_title footer_title">
                            CATEGORIES
                        </div>
                        <ul className="footer_categories_list footer_subtext">
                            <li>Electronics</li>
                            <li>Home & Tools</li>
                            <li>Beauty & Health</li>
                            <li>Toys & Kids</li>
                        </ul>
                    </div>
                    <div className="footer_main_section footer_payments">
                        <div className="footer_payments_title footer_title">
                            ACCEPT PAYMENTS
                        </div>
                        <div className="footer_payments_icons">
                            //TODO: icons
                        </div>
                    </div>
                </div>
                <div className="footer_additional">
                <span className="footer_all-rights">
                    2096 - Mircod. All Rights Reserved.
                </span>
                    <span className="footer_social">
                        //TODO: add social nets icons
                    </span>
                    <span>
                    <a href="#">Blog</a>
                    <a href="#">About us</a>
                </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
