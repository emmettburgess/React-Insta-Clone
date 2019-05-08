import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';
import Likes from './Likes';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };

    render() {
        return(
            <div className="post-border">
                <PostHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-img-container">
                    <img
                        src={this.props.post.imageUrl}
                        className="post-img"
                        alt="post thumbnail" 
                    />
                </div>
                <Likes
                    incrementLike={this.incrementLike}
                    likes={this.state.likes}
                />
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
                </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: Proptypes.string
    })
};

export default Post;