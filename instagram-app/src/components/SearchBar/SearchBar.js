import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="img-container">
                <img className="logo" src="" alt="IG logo" />
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default SearchBar;