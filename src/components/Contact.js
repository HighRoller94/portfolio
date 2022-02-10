import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';

import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import MailIcon from '@material-ui/icons/Mail';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Contact() {
    const [status, setStatus] = useState(false);
    const sendButton = useRef()

    const handleChange = (e) => {
        e.preventDefault();
        sendButton.current.click();
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fppej9d', 'template_ij66m24', e.target, 'user_tPwEwZeUHFlaN3PHk72Nh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setStatus(true)
    };
    
    return (
        
        <div className="contact__section" id="contact">
            <div className="contact__container">
            <h1 className="bg__contact">Email</h1>
                <div className="contact__header" data-aos="fade-right">
                    <h1>CONTACT.</h1>
                </div>
                <div className="email">
                        <a href="mailto:ashbridgescodes@gmail.com">
                            <h2 className="focus">Get in touch</h2>
                            <MailIcon className="icon" />
                        </a> 
                    </div>
                <form className="contact__form" data-aos="fade-left" noValidate autoComplete="off" onSubmit={sendEmail}>
                    <div className="text__field">
                        <input type="text" name="name" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Name</span></label>
                    </div>
                    <div className="text__field">
                        <input type="text" name="email" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Email</span></label>
                    </div>
                    <div className="text__area">
                        <textarea type="text" rows="10" name="message" autoComplete="off" required />
                        <label htmlFor="name" className="label-name" ><span className="content-name">Message</span></label>
                    </div>
                    <button ref={sendButton} style={{display: "none"}} type="submit"></button>
                </form>
                {!status ? (
                        <SendIcon className="send__icon focus" onClick={handleChange}/>
                    ) : (
                        <DoneIcon className="send__icon"/>
                    )}
                <h1 className="bg__contact2">Email</h1>
                
            </div>
        </div>
    )
}

export default Contact
