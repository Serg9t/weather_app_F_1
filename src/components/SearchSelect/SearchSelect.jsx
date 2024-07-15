import React from "react";
import "./SearchSelect.css";

function SearchSelect({ changeSelect }) {
    const cities = ['Yalta', 'Moscow', 'Rim', 'New York', 'London' , 'Minsk', 'Paris', 'Saint Petersburg', 'Berlin']

    return (
        <div className="city-group">
            <div className="select-wrapper">
                <select
                    className="select"
                    onChange={event => changeSelect(event.target.value)}
                >
                    <option disabled={true} value="Select City">Select City</option>
                    {cities.map((city) => <option key={city} value={city}>{city}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default SearchSelect;