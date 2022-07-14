import react from "react";

function SearchFood({ handleResult }) {
    return(
        <div className="searchbar">
            <label htmlFor="search"></label>
            <input 
            type="text"
            id="search"
            placeholder="Type food or tag to search..."
            onChange={(event) => handleResult(event.target.value)}
            />
        </div>
    )
}

export default SearchFood