import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import "../Contact/Contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>Let's work together or just say hello!</p>

      <div className="contact-grid">
        <a
          href="mailto:harunsuleiman55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaEnvelope className="icon" style={{ color: "#D44638" }} />
          <span>Email</span>
          <p>harunsuleiman55@gmail.com</p>
        </a>

        <a
          href="https://github.com/HarunSuleiman"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="icon" style={{ color: "#181717" }} />
          <span>GitHub</span>
          <p>/HarunSuleiman</p>
        </a>

        <a
          href="https://www.linkedin.com/in/harun-suleiman-52760935a"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="icon" style={{ color: "#0077B5" }} />
          <span>LinkedIn</span>
          <p>/harun-suleiman-52760935a</p>
        </a>

        <a
          href="https://t.me/H_S_1100"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaTelegram className="icon" style={{ color: "#0088CC" }} />
          <span>Telegram</span>
          <p>@H_S_1100</p>
        </a>
      </div>

      <div className="phone_no">
        <h2>Phone Numbers</h2>
        <h3>+251967834837</h3>
        <h3>+251722197710</h3>
      </div>
      <div class="row align-items-center justify-content-center flex-column flex-sm-row">
        <div class="col-auto">
          <div class="small m-0">      Copyright&copy; {new Date().getFullYear()} Harun Suleiman | All Rights Reserved</div>
        </div>
        <div class="col-auto">
          <a class="small" href="#!">
            Privacy
          </a>
          <span class="mx-1">&middot;</span>
          <a class="small" href="#!">
            Terms
          </a>
          <span class="mx-1">&middot;</span>
          <a class="small" href="#!">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
