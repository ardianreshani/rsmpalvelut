import React, { useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l0pia7d",
        "template_0uj3ers",
        form.current,
        "user_lLqFzc9qYfVqRfGD9VO1l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-container">
      <div className="center">
        <h1>Ota meihin yhteyttä</h1>
        <p>Kirjoita meille viesti, niin otamme sinuun yhteyttä</p>
      </div>
      <div className="wraper">
        <div className="contact-left">
          <div className="footer-contact">
            <div className="footer-contact-items">
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.491"
                  height="34.551"
                  viewBox="0 0 34.491 34.551"
                >
                  <path
                    id="Icon_feather-phone-call"
                    data-name="Icon feather-phone-call"
                    d="M22.575,7.5A7.5,7.5,0,0,1,28.5,13.425M22.575,1.5A13.5,13.5,0,0,1,34.5,13.41M33,25.38v4.5a3,3,0,0,1-3.27,3,29.685,29.685,0,0,1-12.945-4.6,29.25,29.25,0,0,1-9-9A29.685,29.685,0,0,1,3.18,6.27,3,3,0,0,1,6.165,3h4.5a3,3,0,0,1,3,2.58A19.26,19.26,0,0,0,14.715,9.8a3,3,0,0,1-.675,3.165l-1.905,1.9a24,24,0,0,0,9,9l1.9-1.905a3,3,0,0,1,3.165-.675,19.26,19.26,0,0,0,4.215,1.05A3,3,0,0,1,33,25.38Z"
                    transform="translate(-1.667 0.156)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <div>
                <a href="tel:+358 45 277 2999">+358 45 277 2999</a>

                <a href="tel:+358 40 175 3800">+358 40 175 3800</a>
              </div>
            </div>
            <div className="footer-contact-items">
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.178"
                  height="27"
                  viewBox="0 0 34.178 27"
                >
                  <g
                    id="Icon_feather-mail"
                    data-name="Icon feather-mail"
                    transform="translate(-0.911 -4.5)"
                  >
                    <path
                      id="Path_40"
                      data-name="Path 40"
                      d="M6,6H30a3.009,3.009,0,0,1,3,3V27a3.009,3.009,0,0,1-3,3H6a3.009,3.009,0,0,1-3-3V9A3.009,3.009,0,0,1,6,6Z"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M33,9,18,19.5,3,9"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </span>
              <div>
                <a href="mailto:info@rsmpalvelut.com">info@rsmpalvelut.com</a>
                <a href="mailto:myynti@rsmpalvelut.com">
                  myynti@rsmpalvelut.com
                </a>
              </div>
            </div>
            <div className="footer-contact-items">
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 30 36"
                >
                  <g
                    id="Icon_feather-map-pin"
                    data-name="Icon feather-map-pin"
                    transform="translate(-3)"
                  >
                    <path
                      id="Path_38"
                      data-name="Path 38"
                      d="M31.5,15C31.5,25.5,18,34.5,18,34.5S4.5,25.5,4.5,15a13.5,13.5,0,1,1,27,0Z"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                    <path
                      id="Path_39"
                      data-name="Path 39"
                      d="M22.5,15A4.5,4.5,0,1,1,18,10.5,4.5,4.5,0,0,1,22.5,15Z"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </span>
              <a href="http://maps.google.com/?q=1200Lepinkatu 56,Karjaa 10300 Finland">
                Lepinkatu 56,
                <br />
                Karjaa 10300 Finland
              </a>
            </div>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/rsmpalvelut">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.5"
                height="31.5"
                viewBox="0 0 31.5 31.5"
              >
                <path
                  id="Icon_awesome-facebook-square"
                  data-name="Icon awesome-facebook-square"
                  d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z"
                  transform="translate(0 -2.25)"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="http://www.instagram.com/rsmpalvelut/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.518"
                height="31.511"
                viewBox="0 0 31.518 31.511"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                  transform="translate(0.005 -2.238)"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nimi</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Kirjoita nimesi ..."
              required
            />
            <label htmlFor="email">Sähköposti</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Kirjoita sähköpostiosoitteesi ..."
              required
            />
            <label htmlFor="number">Puhelin</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Kirjoita numerosi ..."
              required
            />
            <label htmlFor="message">Viesti</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder="Kirjoita sähköpostiosoitteesi"
              required
            ></textarea>
            <button type="submit">Lähettä</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
