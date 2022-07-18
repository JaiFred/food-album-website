import react from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


const EditFoodCard = ({ handleEditFood }) => {
    const[formData, setFormData] = useState({
        image: "",
        name: "",
        about: "",
        description: "",  

    });

    const { image, name, about, description } = formData;

    console.log(useParams())
    const { id } = useParams()

    // const history = useHistory()

    // useEffect(() => {
    // fetch(`http://localhost:3000/Album/${id}`)
    //     .then((res) => res.json())
    //     .then((food) => setFormData(food));
    // }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    };

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

    //     fetch(`http://localhost:3000/Album/${id}`, configObj)
    //         .then((r) => r.json())
    //         .then((editedCard) => {
    //             handleEditFood(editedCard);
    //             history.push(`/Album/${id}`)
    //          });
    };



    return (
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <h3>Edit</h3>

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
            <Link to={`/`}>
            <button type="submit">Edit Entry</button>
            </Link>
        </form>
    )
}

export default EditFoodCard;