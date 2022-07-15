import react from "react";
import { useEffect, useState } from "react";


const EditFoodCard = ({ handleEditFood }) => {
    const initialState = {
        image: "",
        name: "",
        about: "",
        description: "",
    };

const[formData, setFormData] = useState(initialState);

const { image, name, about, description } = formData;

useEffect(() => {
    fetch(`http://localhost:3000/Album/${ handleEditFood }`)
        .then((res) => res.json())
        .then((food) => setFormData(food));
}, [handleEditFood]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        handleEditFood();
    }

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

            </form>
    )

}

export default EditFoodCard;