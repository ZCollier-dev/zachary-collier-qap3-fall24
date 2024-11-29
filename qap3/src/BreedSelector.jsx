import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BreedSelector(props) {
  const url = "https://dog.ceo/api/breeds/list/all";
  const imgUrl = `https://dog.ceo/api/breed/${props.selectedBreed}/images/random/${props.numImages}`;
  const [listBreed, setListBreed] = useState([]);
  const [listImages, setListImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw `Response Status: ${response.status}`;
        }

        const breedListJSON = await response.json();

        const breedListKeys = Object.keys(breedListJSON.message);
        const breedListValues = Object.values(breedListJSON.message);
        const breedList = [];
        for (let i = 0; i < breedListKeys.length; ++i) {
          if (breedListValues[i].length == 0) {
            breedList.push(`${breedListKeys[i]}`);
          } else {
            for (let j = 0; j < breedListValues[i].length; ++j) {
              breedList.push(`${breedListKeys[i]}/${breedListValues[i][j]}`);
            }
          }
        }
        setListBreed(() => breedList);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function refetchImages() {
    async function fetchData() {
      try {
        const response = await fetch(imgUrl);
        if (!response.ok) {
          throw `Response Status: ${response.status}`;
        }

        const imageListJSON = await response.json();
        setListImages(imageListJSON.message);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(imgUrl);
        if (!response.ok) {
          throw `Response Status: ${response.status}`;
        }

        const imageListJSON = await response.json();
        setListImages(imageListJSON.message);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [imgUrl]);

  const listItems = listBreed.map((dogBreed) => (
    <option key={dogBreed} value={dogBreed}>
      {dogBreed}
    </option>
  ));

  return (
    <motion.div
      className="breed-selector"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="breed-select-box">
        <label htmlFor="breed-select">Breed: </label>
        <select
          id="breed-select"
          name="breed-select"
          onChange={(event) => props.handleBreed(event.target.value)}
        >
          {listItems}
        </select>
      </div>
      <div className="img-num-box">
        <label htmlFor="img-num">Number of Images (1-100): </label>
        <input
          type="number"
          id="img-num"
          name="img-num"
          placeholder="1"
          min={1}
          max={100}
          onChange={(event) => {
            props.handleNum(event.target.value);
          }}
        />
      </div>
      <div className="button-box">
        <button
          onClick={() => {
            props.handleImage(listImages);
            refetchImages();
          }}
        >
          Fetch!
        </button>
      </div>
    </motion.div>
  );
}

export default BreedSelector;
