import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-img-container">
                <img className="post-img" src={props.post.imageUrl} alt="post image" />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;