import React from "react";
import "./SearchContainer.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchSelect from "../SearchSelect/SearchSelect";

function SearchContainer({ location, handleInputChange, search, handleKeyDown, changeSelect }) {

    return (
        <div className="search-container">

            <SearchSelect changeSelect={changeSelect} />

            <SearchInput
                location={location}
                handleInputChange={handleInputChange}
                search={search}
                handleKeyDown={handleKeyDown}
            />

        </div>
    )
}

export default SearchContainer;