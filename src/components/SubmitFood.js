import react from 'react';


function SubmitFood() {
    return(
    <form action="#" method="post">
     <ul>
        <div>
       <label className="nameinput"></label>
         <input type="text" class="textInput" id="text1" placeholder='name' />
         </div>
         <div>
       <label className="imageinput"></label>
         <input type="text" class="textInput" id="text2" placeholder='image' />
         </div>
         <div>
       <label className="aboutinput"></label>
         <input type="text" class="textInput" id="text3" placeholder='about' />
         </div>
         <div>
       <label className="descriptioninput"></label>
         <input type="text" class="textInput" id="text4" placeholder='description'/>
         </div>
    <input id="submitBtn" type="submit" />
    
    </ul>
</form>)}

export default SubmitFood;