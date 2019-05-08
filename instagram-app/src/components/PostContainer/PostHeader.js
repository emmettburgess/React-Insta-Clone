import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="thumbnail-container">
                <img 
                    src={props.thumbnailUrl} 
                    className="post-thumb" 
                    alt="post header" />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

export default PostHeader;