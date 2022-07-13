import react from "react";
import FoodCard from "./FoodCard"

function FoodContainer({ foods }) {
    const populateFoodContainer = foods.map((food) => (
        <FoodCard food={ food } />
    ))
    return (
        <ul className="food_cards">
            { populateFoodContainer }
        </ul>
    )
}

export default FoodContainer