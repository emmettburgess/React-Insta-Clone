import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="searchbar-container">
            <div className="img-container">
                <img
                    src="instagram-app\src\assets\IGlogo.png"
                    className="logo"
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Search..."
                    onKeyDown={props.searchPosts}
                />
            </div>
            <div className="social-container">
                <div className="social">
                    <i className="compass" />
                </div>
                <div className="social">
                    <i className="heart" />
                </div>
                <div className="social">
                    <i className="circle" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;