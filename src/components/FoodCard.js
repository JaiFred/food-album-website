import react from "react";

function FoodCard ({ food, onDeleteFoods }) {
    const { id, image, name, timeAdded, about, description } = food

    function handleDeleteClick() {
        let config = {
            method: "DELETE",
        };
        fetch(`http://localhost:3000/Album/${id}`, config);
        // onDeleteFoods(id)
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
                                <form 
                                    onSubmit={() => {
                                        fetch(`http://localhost:3000/Album/${id}`, { 
                                        method: "DELETE",
                                        });
                                    }}
                                    >
                                    <button className="delete_button" onSubmit={ handleDeleteClick }>Delete Post</button>
                                </form>
                                <button className="edit_button">Edit Post</button>
                            </div> 
                        </td>
                    </tr>
                </div>
               
            </div>
            
        </div> 
    )
}

export default FoodCard