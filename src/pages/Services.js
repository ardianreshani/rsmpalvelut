import React, { useEffect, useState } from "react";
import { images } from "../data/Image";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "rgba(0, 0, 0,.9)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },

  caption: {
    showCaption: false,
  },
  progressBar: {
    height: "20px",
    fillColor: "blue",
    backgroundColor: "white",
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
          className={`${tag === "all" ? "btn-active" : ""}`}
          onClick={() => setTag("all")}
        >
          All Work
        </button>
        <button
          className={`${tag === "brenda" ? "btn-active" : ""}`}
          onClick={() => setTag("brenda")}
        >
          Haouse Renovation
        </button>
        <button
          className={`${tag === "jasht" ? "btn-active" : ""}`}
          onClick={() => setTag("jasht")}
        >
          Outside House
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
    </div>
  );
};

export default Services;
