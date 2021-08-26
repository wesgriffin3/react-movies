import React from "react";

const Searchbox = (props) => {
  return (
    <div className="col-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Searchbox;
