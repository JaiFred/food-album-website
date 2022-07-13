import react from "react";

function FoodCard ({ food }) {

    return(
        <li className="card-data">
            <div className="card">
                <img src={food.image}></img>
            </div>
        </li>
    )
}

export default FoodCard