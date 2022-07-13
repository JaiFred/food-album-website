import react from "react";

function Description({ food }) {

    return(
        <div className="tags">
            {food.description.type}
        </div>
    )
}

export default Description