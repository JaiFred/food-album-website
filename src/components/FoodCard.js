import react from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function FoodCard ({ food, onDeleteFoods, editMode }) {
    const { id, image, name, timeAdded, about, description } = food

    const editClicked = (id) => {
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
                    <table className="food_info_table">
                        <tr className="card_inner_table"> 
                            <td className="card_image_cell">
                                <img 
                                    src={image} 
                                    alt={name} 
                                    className="card_image" 
                                />
                            </td>
                        </tr>
                        <tr className="card_inner_table_2">
                            <td className="card_text_cell">
                                <div className="card_content">
                                    <p className="card_title">
                                        {name}
                                    </p>
                                    <p className="card_text">
                                        {about}
                                    </p>
                                    <p className="card_detail">
                                        {description}
                                    </p>
                                    <div className="buttons_and_date">
                                    <table className="buttons_and_date_organizer">
                                 {/* onClick event that responds to DELETE */}
                                        <tr>
                                            <td>
                                                <button className="delete_button" onClick={handleDeleteClick}>Delete Post</button>
                                            </td>
                                            <td>
                                                <div className="date_posted">
                                                    <p>{timeAdded}</p>
                                                </div>
                                            </td>
                                {/* Write onClick event that allows user to edit post */}
                                            <td>
                                                <Link to={`/Album/${id}/edit`}>
                                                    <button className="edit_button" onClick={editClicked}>Edit Post</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </table>
                                    </div>
                                </div>
                                
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> 
    )
}

export default FoodCard