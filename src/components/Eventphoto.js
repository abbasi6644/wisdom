import React from 'react';

export default function Eventphoto() {
    return (
        <>
            <div className='photo-section p-150-0'>
                <div className='container'>
                    <div className='section-head'>
                        <h2>Events Photos</h2>
                        <a href='#' className='orange-button'>View All</a>
                    </div>
                    <div className='event-row'>
                        <div className='event-col'>
                            <div className='event-image'>
                                <img src="img/event-1.svg" alt="Wisdom Banner" className='event-img' />
                            </div>
                            <div className='event-description'>
                                <h3>6th Annual LNG Summit USA</h3>
                                <span className='e-date'>10 July 2022</span>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href='#' className='view-btn'>View Detail</a>
                            </div>
                        </div>
                        <div className='event-col'>
                            <div className='event-image'>
                                <img src="img/event-2.svg" alt="Wisdom Banner" className='event-img' />
                            </div>
                            <div className='event-description'>
                                <h3>Future of Maritime Solutions</h3>
                                <span className='e-date'>24 July 2022</span>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href='#' className='view-btn'>View Detail</a>
                            </div>
                        </div>
                        <div className='event-col'>
                            <div className='event-image'>
                                <img src="img/event-1.svg" alt="Wisdom Banner" className='event-img' />
                            </div>
                            <div className='event-description'>
                                <h3>6th Annual LNG Summit USA</h3>
                                <span className='e-date'>10 July 2022</span>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href='#' className='view-btn'>View Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}