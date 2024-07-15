import React from "react";
import "./SearchInput.css";

function SearchInput({ location, handleInputChange, search, handleKeyDown }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <i onClick={search} className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default SearchInput;