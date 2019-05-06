import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="thumbnail">
                <img src={props.thumbnailUrl} className="post-thumb" alt="header" />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

export default PostHeader;