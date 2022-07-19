import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";


function FoodDetail ({ onDeleteFoods }) {
    

    const [updatedCard, setUpdatedCard] = useState([])
    
    const { name, image, about, description, timeAdded} = updatedCard
    
    console.log(updatedCard)
    console.log(onDeleteFoods)
    


    const { id } = useParams()
    console.log(id)

    useEffect(() => {
    fetch(`http://localhost:3000/Album/${id}`)
        .then((res) => res.json())
        .then((food) => setUpdatedCard(food));
    }, [id]);

    // Deletes post 
    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/Album/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(onDeleteFoods(updatedCard.id))
    }

    return(
        <div className="card_space">
            <div className="card_data" key={id}>        
                <div className="card">
                    <Link to={`/`}>
                        <button className="back_to_Home">Homepage</button>
                    </Link>
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