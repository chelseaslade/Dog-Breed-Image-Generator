import React, { useState, useEffect } from "react";

const BreedList = ({ chooseBreed, chooseImgNum }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreedList = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreedList();
  }, []);

  return (
    <>
      <div className="entryForm">
        <h2>Select Breed:</h2>
        <select name="breed">
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default BreedList;
