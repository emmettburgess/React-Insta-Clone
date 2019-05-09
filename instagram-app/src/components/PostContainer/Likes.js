import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../CommentSection/Comment';

const LikesDiv = styled.div`
    height: 10px;
    width: 10px;
    margin: 10px;
    padding-bottom: 15px;
`;

const Likes = props => {
    return [
        <FlexWrapper
            key="likes-icons-container"
            onClick={props.incrementLike}
            comment
        >
            <LikesDiv>
                <i className="heart" />
            </LikesDiv>
            <LikesDiv>
                <i className="comment" />
            </LikesDiv>
        </FlexWrapper>
        <FlexWrapper
            key="likes-container"
            comment
        >
            <LikesDiv>
                {props.likes}
            </LikesDiv>
        </FlexWrapper>
    ];
};

export default Likes;