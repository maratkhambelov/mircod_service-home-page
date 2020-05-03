import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import youtube from '../../assets/icons/youtube.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import mastercard from '../../assets/mastercard.png';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';

const Footer = (props) => {

    const categories = [
        {id: 1, title: 'Electronics', link: '/electronics'},
        {id: 2, title: 'Home & Tools', link: '/hometools'},
        {id: 3, title: 'Beauty & Health', link: '/beautyhealth'},
        {id: 4, title: 'Toys & Kids', link: '/toyskids'},
    ];
    const iconsSocial = [
        {id: 1, title: 'youtube', src: youtube},
        {id: 2, title: 'facebook', src: facebook},
        {id: 3, title: 'twitter', src: twitter},
    ];
    const iconsPayment = [
        {id: 1, title: 'mastercard', src: mastercard},
        {id: 2, title: 'paypal', src: paypal},
        {id: 3, title: 'visa', src: visa},
    ];

    return (
        <div className="footer">
            <div className="footer_inner">
                <div className="footer_main">
                    <div className="footer_about-us">
                        <div className="footer_about-us_title footer_title">
                            ABOUT US
                        </div>
                        <div className="footer_about-us_text footer_subtext">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sectetur, adipisci velit, sed quia non numquam eius .                        </div>
                    </div>
                    <div className="footer_categories">
                        <div className="footer_categories_title footer_title">
                            CATEGORIES
                        </div>
                        <ul className="footer_categories_list footer_subtext">
                            {categories.map(item=>{
                                return(
                                    <Link key={item.id} to={item.link}>
                                        <li>{item.title}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_payments">
                        <div className="footer_payments_title footer_title">
                            ACCEPT PAYMENTS
                        </div>
                        <div className="footer_payments_icons">
                            {iconsPayment.map(item=>{
                                return(
                                    <img src={item.src} key={item.id} alt={item.title} width={40} className='footer_payments_icon'/>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer_additional">
                <span className="footer_all-rights">
                    &#169; 2096 - Mircod. All Rights Reserved.
                </span>
                    <span className="footer_social">
                            {iconsSocial.map(item=>{
                                return(
                                    <img src={item.src} key={item.id} alt={item.title} />
                                )
                            })}
                    </span>
                    <span className="footer_quick-links">
                        <Link  to='/blog'>
                            Blog
                        </Link>
                        <Link to='/aboutus'>
                            About us
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
