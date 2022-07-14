import react from 'react';
import { useState } from 'react'


function SubmitFood({ handleAddFood }) {
  const [ id, setId ] = useState ("")
  const [ image, setImage ] = useState("")
  const [ name, setName ] = useState("")
  const [ about, setAbout ] = useState("")
  const [ description, setDescription ] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/Album", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        about: about,
        description: description,
      })
    })
    .then((res) => res.json())
    .then((newFood) => handleAddFood(newFood)); 
  }
    return (
    <form onSubmit={handleSubmit} method="post">
     <ul>
         <div>
       <label className="imageinput"></label>
         <input 
          type="text" 
          class="textInput" 
          id="text2" 
          placeholder='image' 
          onChange={(e) => setImage(e.target.value)}
          />
         </div>
         <div>
       <label className="nameinput"></label>
         <input 
          type="text" 
          class="textInput" 
          id="text1" 
          placeholder='name'
          onChange={(e) => setName(e.target.value)} 
          />
         </div>
         <div>
           <label className='timeAdded'></label>
           <input 
           
           />
         </div>
         <div>
       <label className="aboutinput"></label>
         <input 
          type="text" 
          class="textInput" 
          id="text3" 
          placeholder='about' 
          onChange={(e) => setAbout(e.target.value)}
          />
         </div>
         <div>
       <label className="descriptioninput"></label>
          <input 
          type="text" 
          class="textInput" 
          id="text4" 
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
          />
         </div>
    <input id="submitBtn" type="submit" />
    
    </ul>
</form>)}

export default SubmitFood;