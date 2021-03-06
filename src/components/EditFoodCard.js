import react from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const EditFoodCard = ({ handleEditFood }) => {
    const[formData, setFormData] = useState({
        image: "",
        name: "",
        about: "",
        description: "",  
    });

    const { image, name, about, description } = formData;

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
    fetch(`http://localhost:3000/Album/${id}`)
        .then((res) => res.json())
        .then((food) => setFormData(food));
    }, []);

    const history = useHistory()
    console.log(history)

    function handleSubmit(e) {
        e.preventDefault();
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        }

        fetch(`http://localhost:3000/Album/${id}`, configObj)
            .then((r) => r.json())
            .then((editedCard) => {
                handleEditFood(editedCard);
                history.push(`/Album/${id}`)
             });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    };

    
    return (
        <form onSubmit={handleSubmit} className="form" autoComplete="on">
            
            <h3>Edit</h3>

            <ul>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            /> 
            
           <label htmlFor="image">Image</label>
            <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={handleChange}
            />

            <label htmlFor="about">About</label>
                <input
                type="text"
                id="about"
                name="about"
                value={about}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
                <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            />
            </ul>
            <input type="submit" value="edit" placeholder="Edit Entry" />
        </form>
    )
}

export default EditFoodCard;