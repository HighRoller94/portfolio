import React from 'react';
import Aos from 'aos';

import "aos/dist/aos.css";
import '../styles/styles.scss'


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    return (
        <div className="footer__section" data-aos="fade-up">
            <div className="footer__info">
                <div className="footer__logoInfo">
                    <svg
                        className="footer__logo" 
                        data-name="Layer 1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 157.47 102.56">
                        <path
                            d="M633.73,317.33H583l-10.79,28.26h-3.34l38-99.49h2.92l37.86,99.49h-3.34Zm-1-2.62-24.32-63.95-24.33,63.95Z" 
                            transform="translate(-568.91 -243.04)" 
                            fill="currentColor"/>
                        <path 
                            d="M720.26,301.24a25.4,25.4,0,0,1,6.12,17q0,12.09-8.31,19.74t-24.17,7.64H664.46V243H693.9q15.29,0,22.72,6.92T724,268.1q0,10.2-5.46,16.31A24.76,24.76,0,0,1,705,292.28,25.83,25.83,0,0,1,720.26,301.24Zm-52.88-10.42h27.38q12.82,0,19.6-6t6.78-16.68q0-10.2-6.71-16.17t-20.53-6H667.38Zm48.29,45.31q7.8-6.57,7.79-17.92t-8-17.85q-8-6.63-21.85-6.63H667.38v48.95H693.9Q707.87,342.68,715.67,336.13Z" 
                            transform="translate(-568.91 -243.04)" 
                            fill="currentColor"/>
                    </svg>
                    
                </div>
                <div className="footer__links">
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                </div>
                <div className="footer__projects">
                    <p>Travel</p>
                    <p>Cook</p>
                    <p>Pyre</p>
                    <p>Illume</p>
                    <p>More</p>
                </div>
                <h1 className="footer__top focus" onClick={scrollToTop}>Back to top</h1>
            </div>
        </div>
    )
}

export default Footer
