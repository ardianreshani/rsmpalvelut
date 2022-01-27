import React from "react";
import aboutAvatar from "../images/about-avatar.png";
import expert from "../images/expert.png";
import flexible from "../images/flexible.png";
import clock from "../images/clock.png";
import CTACall from "../components/Ctacall";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left-txt">
          <h2>What We Are</h2>
          <p>
            Our master company has specialized in painting and drywall. Our
            competent employees have many years of experience in their fields of
            activity. Our highly trained specialists are always up to date and
            familiar with the latest techniques and processes. We bring this
            knowledge and this competence to your construction project and
            ensure that the highest quality standards are met. With guarantee.
            Your satisfaction is our motivation for successful projects.
          </p>
        </div>
        <div className="about-left-image">
          <img src={aboutAvatar} alt="aboutAvatar" />
          <div className="our-mession">
            <h2>Our Mession</h2>
            <p>
              We are only satisfied when you are satisfied. That's why it's
              important to us to provide you with advice and support for your
              construction or renovation project. At our location in Karjaa
              qualified specialists and a highly motivated team look forward to
              supporting you with your project.
            </p>
          </div>
        </div>
      </div>
      <div className="whyus">
        <div className="center">
          <h2>Therefore you should hire us:</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-logo">
              <img src={expert} alt="expert" />
            </div>
            <div className="card-text">
              <h4>Specialists with experience</h4>
              <p>
                Many years of experience, constant further training in our
                specialist areas
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-logo">
              <img src={flexible} alt="flexible" />
            </div>
            <div className="card-text">
              <h4>Flexibility</h4>
              <p>We can react flexibly to short-term change requests.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-logo">
              <img src={clock} alt="clock" />
            </div>
            <div className="card-text">
              <h4>On-Time Delivery</h4>
              <p>
                How often were appointments promised that were not kept, not
                with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTACall />
      <Footer />
    </>
  );
};

export default About;
