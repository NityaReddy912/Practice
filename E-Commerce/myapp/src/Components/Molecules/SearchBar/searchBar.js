import React, { PureComponent } from "react";
import Input from "../../atoms/Input";
import './searchBar.css';

class SearchBar extends PureComponent{
  render(){
  return (
    <div className="Search-bar">
      <div className="search-bar-inner ">
        <div className="search-icon">
        </div>
        <div className="flex-1 ">
          <Input />
        </div>
      </div>
      </div>
     
  );
  };
};

export default SearchBar;





