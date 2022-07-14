import react from "react";
import Description from "./Description";

function FoodCard ({ food }) {
    const { id, image, name, timeAdded, about, description } = food

    return(
        <li className="card_data" key={id}>
            <div className="card">
                <img 
                src={image} 
                alt={name} 
                className="card_image" 
                />
                <div className="card_content">
                    <div className="card_title">{name}</div>
                    <p className="card_text">{about}</p>
                    <div className="card_detail">
                        <p>
                            <Description description={description}/>
                        </p>
                    </div>
                    <button className="delete_button">Delete Post</button>
                    <button className="edit_button">Edit Post</button>
                </div>
            </div>
        </li>
    )
}

export default FoodCard