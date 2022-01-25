import React from 'react';

import { Link } from 'react-scroll';

import '../styles/styles.scss';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    return (
        <div className="footer__section">
            <div className="footer__info">
                <div className="footer__logoInfo">
                    <Link to="home"><h1 className="footer__logo focus">AB</h1></Link>
                </div>
                <div className="footer__links">
                    <Link to="about"><p>ABOUT</p></Link>
                    <Link to="projects"><p>PROJECTS</p></Link>
                    <Link to="skills"><p>SKILLS</p></Link>
                </div>
                <div className="footer__projects">
                    <p>TRAVEL</p>
                    <p>COOK</p>
                    <p>PYRE</p>
                    <p>ILLUME</p>
                </div>
                <h1 className="footer__top focus" onClick={scrollToTop}>Back to top</h1>
            </div>
        </div>
    )
}

export default Footer
