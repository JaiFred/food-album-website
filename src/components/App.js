import react from 'react';
import { useState, useEffect } from "react"
import { Switch, Route } from 'react-router';
import'./App.css';
import Header from "./Header"
import FoodContainer from './FoodContainer';
import SubmitFood from './SubmitFood';
import SearchFood from './SearchFood';
import EditFoodCard from './EditFoodCard';
import { Router, BrowserRouter } from 'react-router-dom';

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

  //Variable that accepts a filter function that filters by food name and food description tag
  const newSearch = foods.filter((food) => {
    return food.name.toLowerCase().includes(filterFoods.toLowerCase()) ||
    food.description.toLowerCase().includes(filterFoods.toLowerCase());
  })

  //Function that creates a copy on an array and adds new food post to it - prevents mutation
  function handleAddFood(newFood) {
    const updatedFoodsArray = [...foods, newFood];
    setFoods(updatedFoodsArray);
  }

  //function that edits the food card and updates the description
  const handleEditFood = (editedCard) => {
    const updatedFoodsArray = foods.map((oldFoodCard) => {
      if (oldFoodCard.id === editedCard.id){
        return editedCard;
      } else {
        return oldFoodCard;
      }
    })
    setFoods(updatedFoodsArray);
  }

  //function that filters array and deletes a post matching the post id - (foods.id) 
  function handleDeleteFoods(id) {
    const updatedFoodsArray = foods.filter(
      (food) => food.id !== id
    );
    setFoods(updatedFoodsArray)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <SubmitFood handleAddFood={handleAddFood}/>
          <SearchFood handleResult={handleResult}/>
          <FoodContainer foods={newSearch} onDeleteFoods={handleDeleteFoods} />
        </Route>
        <Route path="/Album/:id/edit">
          <EditFoodCard handleEditFood={handleEditFood} />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
