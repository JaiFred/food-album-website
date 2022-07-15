import react from "react";
import FoodCard from "./FoodCard"

function FoodContainer({ foods, editMode, onDeleteFoods }) {
    const populateFoodContainer = foods.map((food) => (
        <FoodCard food={ food } onDeleteFoods={onDeleteFoods} editMode={editMode} />
    ))
    return (
        <ul className="food_cards">
            { populateFoodContainer }
        </ul>
    )
}

export default FoodContainer