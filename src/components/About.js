import React from 'react';

export default function About() {
    return (
        <>
            <div className='about-us-section p-150-0 '>
                <div className='container'>
                    <div className='about-img'>
                        <img src="img/Wisdom-Events.svg" width="" height="" alt="" />
                        <div className='img-overlay'>
                            <a href='#'>Contact<img src="img/right-arrow.png" width="auto" height="" alt="" /></a><img src="img/logo.svg" width="auto" height="30" alt="" />
                        </div>
                    </div>
                    <div className='about-content'>
                        <h2>About Us</h2>
                        <p>We are a leading event and high-level business meetings organiser, committed to creating a truly valuable and reliable learning and networking platform for top professionals from commercial, government, and research segments. We deliver closed-door events, such as summits, conferences, exhibitions, and face-to-face business meetings of exceptional quality, encompassing diverse industry verticals such as energy, maritime, agro, technology, healthcare, marketing and communications...</p>
                        <a href='#' className='orange-button'>Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}