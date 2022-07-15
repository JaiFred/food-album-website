import react from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function FoodCard ({ food, onDeleteFoods, editMode }) {
    const { id, image, name, timeAdded, about, description } = food

    const editClicked = () => {
        editMode(id);
    };

    // Deletes post 
    function handleDeleteClick() {
        fetch(`http://localhost:3000/Album/${id}`, {
            method: "DELETE",
        });
        onDeleteFoods(id)
        .then((res) => res.json())
        .then(onDeleteFoods(id))
    }

    return(
        <div className="card_space">
            <div className="card_data" key={id}>        
                <div className="card">
                    <tr className="card_inner_table"> 
                        <td className="card_image_cell">
                            <img 
                                src={image} 
                                alt={name} 
                                className="card_image" 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="card_text_cell">
                            <div className="card_content">
                            <div className="card_title">
                                {name}
                            </div>
                             <p className="card_text">
                                {about}
                            </p>
                            <div className="card_detail">
                            <p>
                            {description}
                            </p>
                            </div>
                            {/* onClick event that responds to DELETE */}
                                <button className="delete_button" onClick={handleDeleteClick}>Delete Post</button>
                            {/* Write onClick event that allows user to edit post */}
                                <button className="edit_button" onClick={editClicked}>Edit Post</button>
                            </div> 
                        </td>
                    </tr>
                </div>
               
            </div>
            
        </div> 
    )
}

export default FoodCard