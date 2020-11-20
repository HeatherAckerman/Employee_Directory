import React from "react";

const Search = (props) => {
return (
    <div style={{textAlign: "center"}}>
      <form style={{padding: 15}}>
        <input
          placeholder="Search"
          name="search"
          type="text"
          class="alert alert-secondary"
          onChange={(event) => props.startSorting(event)}
        />
      </form>
    </div>
  );
}

export default Search;