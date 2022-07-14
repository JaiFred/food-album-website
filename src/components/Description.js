import react from "react";

function Description({ description }) {

    return(
        <div className="tags">
            {description.type}
        </div>
    )
}

export default Description