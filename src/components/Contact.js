import React from 'react';
import Aos from 'aos';

import { TextField } from '@material-ui/core'

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Contact() {
    return (
        <div className="contact__section" id="contact">
            <div className="contact__container">
                <div className="contact__header" data-aos="fade-right">
                    <h1>CONTACT.</h1>
                    <h2>Get in touch</h2>    
                </div>
                <form className="contact__form" action="https://formsubmit.co/03431b808e0c45fafff8b68d8f884f7d" method="POST" data-aos="fade-left">
                    <input type="hidden" name="_captcha" value="false" />
                    <TextField type="text" id="standard-basic" label="Name" variant="standard" color="currentColor" />
                    <TextField type="email" id="standard-basic" label="Email" variant="standard" />
                    <TextField type="text" id="standard-basic" label="Message" variant="standard" multiline />
                    <button className="focus" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
