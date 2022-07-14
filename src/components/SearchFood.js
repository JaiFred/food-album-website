import react from "react";

function SearchFood() {
    return(
        <div className="searchbar">
            <label htmlFor="search"></label>
            <input 
            type="text"
            id="search"
            placeholder="Type food or tag to search..."
            />
        </div>
    )
}

export default SearchFood