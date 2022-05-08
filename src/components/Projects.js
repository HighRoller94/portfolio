import React, { useEffect } from 'react';
import Aos from 'aos';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import travair from '../assets/projectImages/travair.svg';
import eatz from '../assets/projectImages/eatz.svg';
import marquet from '../assets/projectImages/marquet.svg';
import pyre from '../assets/projectImages/pyre.svg';
import illume from '../assets/projectImages/illume.svg'

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Projects() {

    useEffect(() => {
        Aos.init({ duration: 5000 });
    }, []);

    return (
        <div>
            <div className="projects__section" id="projects">
            <div className="projects__header" data-aos="fade-right" >
                <h1 data-aos="fade-right">2. My main bits.</h1>
                <p data-aos="fade-right" >Check out some of the <span>projects I've been working on</span> recently!</p>
            </div>
            <div className="projects">
                <div className="travair project" data-aos="fade-up">
                    <img data-aos="fade-up" src={travair} alt="Travel" />
                    <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                        <h4>WEBSITE</h4>
                        <h1>Travel Site</h1>
                        <p>Travair is a <span> responsive single page </span> travel website built with HTML, SASS and JS.</p>
                        <div className="project__languages">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                        </div>
                        <div className="btns">
                            <a className="link" href="https://prestige-travel-cf76a.web.app/" target="_blank" rel="noreferrer">
                                <button className="site__btn focus">
                                    <LanguageIcon className="icon"/>
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href="https://github.com/HighRoller94/travel-landing" target="_blank" rel="noreferrer">
                                <button className="git__btn focus">
                                    <GitHubIcon className="icon"/>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="marquet project" data-aos="fade-up">
                    <img data-aos="fade-up" src={marquet} alt="Marquet" />
                    <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                    <h4>WEBSITE</h4>
                        <h1>Marquet</h1>
                        <p>Marquet is a responsive <span>ecommerce multipage website</span> that features full cart functionality, built with HTML, SASS and JS.</p>
                        <div className="project__languages">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                        </div>
                        <div className="btns">
                            <a className="link" href="https://marquet-ecommerce.web.app/" target="_blank" rel="noreferrer">
                                <button className="site__btn focus">
                                    <LanguageIcon className="icon"/>
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href="https://github.com/HighRoller94/marquet-ecommerce" target="_blank" rel="noreferrer">
                                <button className="git__btn focus">
                                    <GitHubIcon className="icon"/>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="eatz project" data-aos="fade-up">
                    <img data-aos="fade-up" src={eatz} alt="Eatz" />
                    <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                    <h4>WEBSITE</h4>
                        <h1>Eatz App</h1>
                        <p>Eatz is a recipe-lookup web application built with React and SASS, connected to an <span>external API</span>.</p>
                        <div className="project__languages">
                            <span>React</span>
                            <span>Edamam API</span>
                        </div>
                        <div className="btns">
                            <a className="link" href="https://recipe-app-bd949.web.app/" target="_blank" rel="noreferrer">
                                <button className="site__btn focus">
                                    <LanguageIcon className="icon"/>
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href="https://github.com/HighRoller94/eatz-recipe-app" target="_blank" rel="noreferrer">
                                <button className="git__btn focus">
                                    <GitHubIcon className="icon"/>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pyre project" data-aos="fade-up">
                    <img data-aos="fade-up" src={pyre} alt="Pyre" />
                    <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                        <h4>WEB APP</h4>
                        <h1>Pyre</h1>
                        <p><span>Music player app</span> with a simple dashboard layout. Built with React and SASS, <span>Pyre uses the Spotify API</span> to allows users to login, listen and manage their media.</p>
                        <div className="project__languages">
                            <span>React</span>
                            <span>Express</span>
                            <span>Spotify</span>
                        </div>
                        <div className="btns">
                            <a className="link" href="https://pyre-2e47e.web.app/" target="_blank" rel="noreferrer">
                                <button className="site__btn focus">
                                    <LanguageIcon className="icon"/>
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href="https://github.com/HighRoller94/pyre" target="_blank" rel="noreferrer">
                                <button className="git__btn focus">
                                    <GitHubIcon className="icon"/>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="illume project" data-aos="fade-up">
                    <img data-aos="fade-up" src={illume} alt="illume" />
                    <div data-aos="fade-up" data-aos-delay="200" className="project__text">
                        <h4>WEBSITE</h4>
                        <h1>Illume</h1>
                        <p>Illume is an ongoing <span>CRUD social media site</span> that aims to help creatives. Built with React, Illume includes a <span>number of features such as</span> custom authentication, user based profiles and cart functionality.</p>
                        <div className="project__languages">
                            <span>React</span>
                            <span>Firebase</span>
                            <span>Router</span>
                        </div>
                        <div className="btns">
                            <a className="link" href="https://illume-68c8e.web.app/home" target="_blank" rel="noreferrer">
                                <button className="site__btn focus">
                                    <LanguageIcon className="icon"/>
                                    Live Site
                                </button>
                            </a>
                            <a className="link" href="https://github.com/HighRoller94/illume-app" target="_blank" rel="noreferrer">
                                <button className="git__btn focus">
                                    <GitHubIcon className="icon"/>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects
