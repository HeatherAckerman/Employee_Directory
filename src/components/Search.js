import React from "react";

const Search = (props) => {
return (
    <div>
      <form>
        <input
          placeholder="Search"
          name="search"
          type="text"
          onChange={(event) => props.startSorting(event)}
        />
      </form>
    </div>
  );
}

export default Search;