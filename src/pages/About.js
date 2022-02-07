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
          <h2>Keitä olemme</h2>
          <p>
            Mestariyrityksemme on erikoistunut korjausrakentamispalveluihin
            Siivouspalvelut , saneeraus, laatoitus, huonekalujen asennus,
            maalaus - tasoitteet, kattohuolto ja maalaus, purku. Meidän
            osaavilla työntekijöillä on monen vuoden kokemus alastaan toiminta.
            Korkeasti koulutetut asiantuntijamme ovat aina ajan tasalla ja
            tuntee uusimmat tekniikat ja prosessit. Tuomme tämän tieto ja tämä
            osaaminen rakennusprojektiisi ja varmistaa, että korkeimmat
            laatuvaatimukset täyttyvät. Takuulla. Tyytyväisyytesi on
            motivaatiomme onnistuneille projekteille.
          </p>
        </div>
        <div className="about-left-image">
          <img src={aboutAvatar} alt="aboutAvatar" />
          <div className="our-mession">
            <h2>Tehtävämme</h2>
            <p>
              Olemme tyytyväisiä vain, kun sinä olet tyytyväinen. Siksi se on
              meille on tärkeää tarjota sinulle neuvoja ja tukea rakennus- tai
              peruskorjausprojekti. Toimipaikallamme Karjaalla päteviä
              asiantuntijoita ja erittäin motivoitunutta tiimiä odottaa tukee
              sinua projektissasi.
            </p>
          </div>
        </div>
      </div>
      <div className="whyus">
        <div className="center">
          <h2>Siksi sinun kannattaa palkata meidät:</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-logo">
              <img src={expert} alt="expert" />
            </div>
            <div className="card-text">
              <h4>Asiantuntijoita</h4>
              <p>
                Useiden vuosien kokemus, jatkuva täydennyskoulutus meillä
                erikoisaloilla.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-logo">
              <img src={flexible} alt="flexible" />
            </div>
            <div className="card-text">
              <h4>Joustavuus</h4>
              <p>
                Pystymme reagoimaan joustavasti lyhytaikaisiin muutospyyntöihin.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-logo">
              <img src={clock} alt="clock" />
            </div>
            <div className="card-text">
              <h4>Toimitus ajallaan</h4>
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
