import React from 'react';
import About from './About';
import Upcomingevent from './Upcomingevent';
import Eventphoto from './Eventphoto';

export default function Content() {
    return (
        <>
        <div className='hero-banner-section'>
                <div className='container'>
                    <div className='hero-caption'>
                        <h1>Knowledge Networking Partnership</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href='#' className='orange-button'>Contact</a>
                    </div>
                </div>    
                <img src="img/hero-banner-cover.svg" alt="Wisdom Banner" className='hero-img' />
        </div>
            <div className='quick-info-section'>
                <div className='container'>
                    <div className='heading-text'>
                        <h2>Count Every Second Until The <strong>EVENT</strong></h2>
                    </div>
                    <div className='quick-box'>
                        <div className='quick-col'>
                            <div className='quick-icon'><img src="img/coronavirus.png" width="" height="" alt="" /></div>
                            <div className='quick-content'>
                                <h3>52</h3>
                                <p>Countries Represented</p>
                            </div>
                        </div>
                        <div className='quick-col'>
                            <div className='quick-icon'><img src="img/continents-of-earth.png" width="" height="" alt="" /></div>
                            <div className='quick-content'>
                                <h3>5</h3>
                                <p>Continents</p>
                            </div>
                        </div>
                        <div className='quick-col'>
                            <div className='quick-icon'><img src="img/participants.png" width="" height="" alt="" /></div>
                            <div className='quick-content'>
                                <h3>80%</h3>
                                <p>of C-level participants</p>
                            </div>
                        </div>
                        <div className='quick-col'>
                            <div className='quick-icon'><img src="img/conference.png" width="" height="" alt="" /></div>
                            <div className='quick-content'>
                                <h3>93719</h3>
                                <p>Participation requests received</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Upcomingevent />  
            <Eventphoto />
        </>
         )
}