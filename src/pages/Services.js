import React, { useEffect, useState } from "react";
import { images } from "../data/Image";
import { SRLWrapper } from "simple-react-lightbox";
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
      <button onClick={() => setTag(setFilteredImages)}>Hello</button>
      <SRLWrapper>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Services;
