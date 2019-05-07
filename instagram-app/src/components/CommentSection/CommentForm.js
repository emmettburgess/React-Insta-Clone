import React from 'react';

const CommentForm = props => {
    return (
        <form>
            <input type="text" placeholder="Comment..." 
            onChange={props.changeComment}
            />
        </form>
    );
};

export default CommentForm;