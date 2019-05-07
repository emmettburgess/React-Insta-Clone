import React from 'react';

const Likes = props => {
    return [
        <div
            className="likes-section"
            key="likes-container"
            onClick={props.incrementLike} >
            <div className="likes-wrapper">
                <i className="heart" />
            </div>
            <div className="likes-wrapper">
                <i className="comment" />
            </div>
        </div>
        <div 
            className="likes-section"
            key="likes-container" >
            <div className="likes-wrapper">
                {props.likes}
            </div>
            </div>
    ];
};

export default Likes;