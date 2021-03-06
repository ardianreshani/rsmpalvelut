import React, { useEffect, useState } from "react";
import { images } from "../data/Image";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../components/Footer";
const options = {
  caption: {
    showCaption: false,
  },
};
const Services = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div>
      <div className="button-wraper">
        <button
          className={`${tag === "jasht" ? "btn-active" : ""}`}
          onClick={() => setTag("jasht")}
        >
          Työn ulkopuolella
        </button>
        <button
          className={`${tag === "brenda" ? "btn-active" : ""}`}
          onClick={() => setTag("brenda")}
        >
          Työn sisällä
        </button>
        <button
          className={`${tag === "kulma" ? "btn-active" : ""}`}
          onClick={() => setTag("kulma")}
        >
          Kattotyöt
        </button>
      </div>

      <SRLWrapper options={options}>
        <div className="service-page-container">
          {filteredImages.map((image) => (
            <div className="image-wrapper" key={image.id}>
              <a href={`/G-images/${image.imageName}`}>
                <img src={`/G-images/${image.imageName}`} alt="PhotoGallry" />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
      <Footer />
    </div>
  );
};

export default Services;
