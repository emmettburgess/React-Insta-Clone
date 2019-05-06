import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';


//form for submiting a comment
const Comment = props => {
    return (
        <div className="comment-container">
            <span className="comment">{props.comment.text}</span>
            {' '}
            <span className="user">--{props.comment.username}</span>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;