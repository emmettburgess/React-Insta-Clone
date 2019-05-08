import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src="instagram-app\src\assets\IGlogo.png" className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
    </div>
  );
};

export default SearchBar;
