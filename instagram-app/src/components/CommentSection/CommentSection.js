import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

//comments are displayed

function CommentSection(props) {
    return (
        {props.commentSection.map(commentSection => (
            <div key={commentSection.id} className="comment-section">
                <img src={commentSection.img} alt={commentSection.name} />
                <div>
                    <h3>{commentSection.name}</h3>
                    <Comment />
                </div>
            </div>
        ))}
    );
}

CommentSection.propTypes = {
    commentSection: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
        })
    )
};

CommentSection.defaultProps = {
    commentSection: []
};

export default CommentSection;