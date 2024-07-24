import React, { useState, useEffect } from "react";

//Set variables for breed list (breed & number of images)
const BreedList = ({ onSubmit }) => {
  const [breeds, setBreeds] = useState([""]);

  //Define Fetch data from API function
  useEffect(() => {
    const fetchBreedList = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    };

    //Call function
    fetchBreedList();
  }, []);

  //Form submission set-up
  const submitForm = (e) => {
    e.preventDefault();
    const breed = e.target.breed.value;
    const imgNum = e.target.imgNum.value;
    onSubmit(breed, imgNum);
  };

  //HTML returned
  return (
    <>
      <div className="entryForm">
        <form onSubmit={submitForm}>
          <label>
            <h2>Select Breed:</h2>
            <select name="breed">
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <label>
            <h2>Select Image Number:</h2>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue="1"
              name="imgNum"
            ></input>
          </label>
          <button type="submit">Select</button>
        </form>
      </div>
    </>
  );
};

export default BreedList;
