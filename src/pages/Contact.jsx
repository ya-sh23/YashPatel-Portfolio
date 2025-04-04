import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-page-title">Contact</h1>
        <p className="contact-msg">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Your Message"
              id="message"
              name="user_message"
              required
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact-submit-btn"
            style={{ cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
