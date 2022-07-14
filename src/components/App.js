import react from 'react';
import { useState, useEffect } from "react"
import './App.css';
import Header from "./Header"
import FoodContainer from './FoodContainer';
import SubmitFood from './SubmitFood';
import SearchFood from './SearchFood';

function App() {
  const [ foods, setFoods ] = useState([])
  const [ filterFoods, setFilterFoods ] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/Album")
    .then((res) => res.json())
    .then((foodsArray) => {
      setFoods(foodsArray);
    })
  }, []);

  const handleResult = (findFood) => {
    setFilterFoods(findFood);
  }

  const newSearch = foods.filter((food) => {
    return food.name.toLowerCase().includes(filterFoods.toLowerCase()) ||
    food.about.toLowerCase().includes(filterFoods.toLowerCase());
  })

  function handleAddFood(newFood) {
    const updatedFoodsArray = [...foods, newFood];
    setFoods(updatedFoodsArray);
  }


  return (
    <div className="App">
      <Header />
      <SubmitFood handleAddFood={handleAddFood}/>
      <SearchFood handleResult={handleResult}/>
      <FoodContainer foods={newSearch}/>
    </div>
  );
}

export default App;
