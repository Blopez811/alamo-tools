import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vjp0rwx', 'template_uyro45b', form.current, 'user_f3aRPOtGQhPgwmyQRUmAX')
        .then((result) => {
            console.log(result.text);
            alert("Email successfully sent! A representative will be in contact with you shortly")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
};

export default ContactUs;