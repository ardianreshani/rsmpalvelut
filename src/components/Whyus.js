import React from "react";
import Quality from "../images/quality.png";
import shield from "../images/shield.png";
import labourDay from "../images/labour-day.png";
import handshake from "../images/handshake.png";
const Whyus = () => {
  return (
    <div className="whyus">
      <div className="center">
        <h2>Miksi valita meidät</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-logo">
            <img src={Quality} alt="Quality" />
          </div>
          <div className="card-text">
            <h4>Laatu</h4>
            <p>
              Käytämme työssämme korkealaatuisia ja todistetusti alkuperää
              olevia materiaaleja. Kaikki rakennusmateriaalit ovat suomalaista
              alkuperää.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={handshake} alt="handshake" />
          </div>
          <div className="card-text">
            <h4>Rehellisyys</h4>
            <p>
              Tarjoamme erilaisia palveluita, jotka helpottavat sinua pitää
              huolta Maalaus ulko ja sisä, Katonpesu ja maalaus, Siivouspalvelut
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={shield} alt="shield" />
          </div>
          <div className="card-text">
            <h4>Luotettavuus</h4>
            <p>
              Hankkeen toteutumista valvovat tarkoin luottavat kädet ja
              yrittäjän huolellinen silmä.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={labourDay} alt="labourDay" />
          </div>
          <div className="card-text">
            <h4>Hallita</h4>
            <p>
              Pyrimme täydellisyyteen jokaisessa työssämme. Perustuu 10 vuoteen
              kokemus, niin tavalliset kuin uudet asiakkaat luottavat
              ympäristöön kodeistaan joka vuosi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
