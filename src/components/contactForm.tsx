import React from "react"
import contactSytles from "../styles/contact.module.css"


const ContactForm = () => {
    return (
        <form className={contactSytles.contactForm} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input className={contactSytles.textInput} type="text" name="name" placeholder="Your Name"/><br />
            <input className={contactSytles.textInput} type="email" name="email" placeholder="Your Email"/><br /> 
            <textarea className={contactSytles.textInput} name="message" placehoder="Your Message"></textarea><br />
            <label className="file">
                <input type="file" id="file" aria-label="File browser example" />
                <span className="file-custom"></span>
            </label>
            <br />
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm