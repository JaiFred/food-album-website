import FoodCard from "./FoodCard"

function FoodContainer({ foods, onDeleteFoods }) {
    const populateFoodContainer = foods.map((food) => (
        <FoodCard food={ food } onDeleteFoods={onDeleteFoods} />
    ))
    return (
        <ul className="food_cards">
            { populateFoodContainer }
        </ul>
    )
}

export default FoodContainer