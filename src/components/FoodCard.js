import react from "react";
import Description from "./Description";

function FoodCard ({ food }) {

    return(
        <li className="card-data">
            <div className="card">
                <img 
                src={food.image} 
                alt={food.name} 
                className="card-image" 
                />
                <div className="card-content">
                    <div className="card_title">{food.name}</div>
                    <p className="card_text">{food.about}</p>
                    <div className="card_detail">
                        <p>
                            <Description food={food}/>
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FoodCard