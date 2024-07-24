import React from "react";

const Gallery = ({ images, breed }) => {
  return (
    <div className="gallery">
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image} alt={`${breed} ${index}`} />
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default Gallery;
