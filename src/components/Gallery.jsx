// import React from "react";
// import "../App.css";

// const Gallery = ({ images }) => {
//   return (
//     <div className="gallery">
//       {images &&
//         images.map((image, index) => (
//           <img key={index} src={image} alt="Dog" className="galleryImg" />
//         ))}
//     </div>
//   );
// };

// export default Gallery;

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
