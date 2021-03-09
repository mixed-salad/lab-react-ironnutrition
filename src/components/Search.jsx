import React from "react";
import "./../App.scss";

const Search = (props) => {
  const handleInputChange = (event) => props.onQueryChange(event.target.value);
  return (
    <div className="media">
      <input
        type="search"
        value={props.query}
        onChange={handleInputChange}
        placeholder="Search for any meal here"
      />
    </div>
  );
};

export default Search;
