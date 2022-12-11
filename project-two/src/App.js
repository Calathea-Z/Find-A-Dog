import './styles/App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import BreedPhotos from './Components/BreedPhotos'
import Navbar from './Components/Navbar'
import RandomDog from './Components/RandomDog';

// import Search from './Components/Search'

import TestSearchBar from './Components/TestSearchBar'

import DogList from './Components/DogList';

const dogArray = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi", "cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "tervuren", "vizsla", "waterdog", "weimaraner", "whippet", "wolfhound"]




function App() {

  return (
    <>
      < Navbar />

      {/* <Search dogArray={dogArray} placeHolder="Search By Breed.."/>  */}
      <TestSearchBar dogArray={dogArray} placeHolder="Search By Breed.." />
      <main>
        <Routes>
          <Route exact path="/" element={<RandomDog />} />
          <Route exact path="/ListOfDogs" element={<DogList dogArray={dogArray} />} />
          <Route path="/ListOfDogs/:nameDog" element={<BreedPhotos dogArray={dogArray} />} />
        </Routes>
      </main>
    </>
  );
}
export default App;


