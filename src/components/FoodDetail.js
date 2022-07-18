import react, { useState, useEffect } from "react";
import { Link, NavLink, useParams} from "react-router-dom";


function FoodDetail ({ handleDeleteFoods }) {
    const { image, name, timeAdded, about, description } = food;

    const [updatedCard, setUpdatedCard] = useState([])

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
    fetch(`http://localhost:3000/Album/${id}`)
        .then((res) => res.json())
        .then((food) => setUpdatedCard(food));
    }, []);
    

    // Deletes post 
    function handleDeleteClick() {
        fetch(`http://localhost:3000/Album/${id}`, {
            method: "DELETE",
        });
        handleDeleteFoods(id)
        .then((res) => res.json())
        .then(handleDeleteFoods(id))
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
                                                    <button className="edit_button">Edit Post</button>
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

export default FoodDetail