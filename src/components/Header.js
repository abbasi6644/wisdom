import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <>
            <div className='wrapper' id="custom-header">               
                <div className='super-header'>
                    <div className='container'>
                        <ul className='contact-info'>
                            <li className='phone-info'><img src="img/phone.svg" width="16" height="16" alt="" /><a href='tel:+44 (0)20 3769 4927'>+44 (0)20 3769 4927</a></li>
                            <li className='mail-info'><img src="img/email.svg" width="16" height="16" alt="" /><a href='mailto:info@wisdom.events'>info@wisdom.events</a></li>
                            <li><a href='#'>Career</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                        <ul className='social-links'>
                            <li><a href='#' target="_blank"><img src="img/facebook.svg" width="" height="" alt="" /></a></li>
                            <li><a href='#' target="_blank"><img src="img/twitter.svg" width="" height="" alt="" /></a></li>
                            <li><a href='#' target="_blank"><img src="img/linkedin.svg" width="" height="" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='header' id="header-holder">
                    <div className='container'>
                        <div id="logo-holder">
                            <img src="img/logo.svg" width="auto" height="40" alt="Wisdom logo" />
                        </div>
                        <div id="menu-header">
                            <ul className='menu'>
                                <li className='menu-item'><Link activeClass="active" to="glitch-banner" spy={true} smooth={true}>About</Link></li>
                                <li className='menu-item'>
                                    <Link to="about" spy={true} smooth={true}>Our Projects <FontAwesomeIcon icon="fa-solid fa-angle-down" /></Link>
                                        <ul className='sub-menu'>
                                            <li className='menu-item'><Link to="glitch-banner" spy={true} smooth={true}>Project 1</Link></li>
                                            <li className='menu-item'><Link to="glitch-banner" spy={true} smooth={true}>Project 2</Link></li>
                                            <li className='menu-item'><Link to="glitch-banner" spy={true} smooth={true}>Project 3</Link></li>
                                        </ul>
                                    </li>
                                <li className='menu-item'><Link to="roadmap-wrap" spy={true} smooth={true}>Our Partners</Link></li>
                                <li className='menu-item'><Link to="team" spy={true} smooth={true}>Testimonials</Link></li>
                                <li className='menu-item'><Link to="mint" spy={true} smooth={true}>Contact</Link></li>
                            </ul>
                            <a href="https://metamask.io" target="_blank" rel="noreferrer" className='orange-button'>Events</a>
                        </div>
                    </div>    
                </div>   
            </div>
        </>)
}