import "./App.css";
import Header from "./components/Header.jsx";
import BreedList from "./components/BreedList.jsx";
import Gallery from "./components/Gallery.jsx";
import { useState, useEffect } from "react";

const App = () => {
  //Empty variables for if statement
  const [breed, setBreed] = useState("");
  const [imgNum, setImgNum] = useState(1);
  const [images, setImages] = useState([]);

  //Generate API image URL
  const imgFetch = async (breed, imgNum) => {
    if (breed && imgNum > 0) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${imgNum}`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error("Failed to generate images", error);
      }
    }
  };

  //Call above imgFetch
  useEffect(() => {
    imgFetch();
  });

  const handleFormSubmit = (breed, imgNum) => {
    setBreed(breed);
    setImgNum(imgNum);
    imgFetch(breed, imgNum);
  };

  return (
    <div className="container">
      <Header title="Dog Breed Image Generator" />
      <BreedList
        onSubmit={handleFormSubmit}
        setBreed={setBreed}
        setImgNum={setImgNum}
      />
      <div className="gallery">
        <Gallery images={images} breed={breed} />
      </div>
    </div>
  );
};

export default App;
