import React from 'react';
import PropTypes from 'prop-types';
import {UserName} from '../PostContainer/PostHeader';
import styled, {css} from 'styled-components';

export const FlexWrapper = styled.div`
    display: flex;
    ${props =>
    props &&
    css`
        line-height: 8px;
    `}
`;

const CommentParagraph = styled.p`
        font-weight: 400;
        font-size: 1em;
        padding: 0 5px;
`;


//form for submiting a comment
const Comment = props => {
    return (
        <FlexWrapper>
            <UserName>
                {props.comment.username}
            </UserName>
            <CommentParagraph>
                {props.comment.text}
            </CommentParagraph>
        <FlexWrapper>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
    })
};

export default Comment;