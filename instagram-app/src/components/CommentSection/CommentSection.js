import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

//comments are displayed

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.postId))
            });
        } else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };

    commentHandler = e => {
        this.setState({
            comment: e.target.value
        });
    };

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.comment,
            username: 'username'
        };
        comments.push(newComment);
        this.setState({
            comments, comment: ''
        });
        setTimeout(() => {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentForm 
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};

export default CommentSection;