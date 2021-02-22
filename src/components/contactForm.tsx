import * as React from "react"
const contactStyles = require("../styles/contact.module.css")


const ContactForm = () => {
    return (
        <form className={contactStyles.contactForm} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input className={contactStyles.textInput} type="text" name="name" placeholder="Your Name"/><br />
            <input className={contactStyles.textInput} type="email" name="email" placeholder="Your Email"/><br /> 
            <textarea className={contactStyles.textInput} name="message" placeholder="Your Message"></textarea><br />
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