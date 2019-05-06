import React from 'react';
import Comment from './Comment';

//comments are displayed
const CommentSection =() => {
    return (
        <Media>
            <Media left href="#">
                <Media object data-src="#" alt="user pic" />
            </Media>
            <Media body>
                <Media heading>
                    Media Heading(username)
                </Media>
                <Comment />
            </Media>
        </Media>
    );
};


export default CommentSection;