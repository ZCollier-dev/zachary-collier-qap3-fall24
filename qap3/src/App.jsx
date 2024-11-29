import { useState } from "react";
import Header from "./Header.jsx";
import BreedSelector from "./BreedSelector.jsx";
import ImageGallery from "./ImageGallery.jsx";

function App() {
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  const [numImages, setNumImages] = useState(1);
  const [fetchedImages, setFetchedImages] = useState([]);

  const handleBreed = (breed) => {
    setSelectedBreed(() => breed);
  };

  const handleNum = (num) => {
    setNumImages(() => num);
  };

  const handleImage = (images) => {
    setFetchedImages(() => images);
  };

  return (
    <>
      <Header />
      <BreedSelector
        selectedBreed={selectedBreed}
        handleBreed={handleBreed}
        numImages={numImages}
        handleNum={handleNum}
        handleImage={handleImage}
      />
      <ImageGallery fetchedImages={fetchedImages} />
    </>
  );
}

export default App;
