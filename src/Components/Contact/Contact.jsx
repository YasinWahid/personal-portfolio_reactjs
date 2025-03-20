import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();
      
        if (!name || !email || !message) {
          alert("Please fill in all fields before submitting.");
          return;
        }
      
        emailjs
          .sendForm(
                 import.meta.env.VITE_EMAILJS_SERVICE_ID,
                 import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                 form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                  )
          .then(
            () => {
              console.log("SUCCESS!");
              setDone(true);
              form.current.reset(); 
            },
            (error) => {
              console.error("FAILED...", error.text);
            }
          );
      };
      

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="s-name">
          <span style={{color: darkMode? 'white': ''}} >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="user"
            placeholder="enter your name"
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="enter your email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="please input your message..."
          />
          <input
            type="submit"
            value="Send"
            className="button"
            style={{ width: "100%" }}
          />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
