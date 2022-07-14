import react from 'react';
import { useState, useEffect } from "react"
import './App.css';
import Header from "./Header"
import FoodContainer from './FoodContainer';
import SubmitFood from './SubmitFood';
import SearchFood from './SearchFood';

function App() {
  const [ foods, setFoods ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Album")
    .then((res) => res.json())
    .then((foodsArray) => {
      setFoods(foodsArray);
    })
  }, []);

  return (
    <div className="App">
      <Header /> 
      <SubmitFood />
      <SearchFood />
      <FoodContainer foods={foods}/>
    </div>
  );
}

export default App;
