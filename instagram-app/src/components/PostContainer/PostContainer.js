import React from 'react';
import dummyData from '../dummy-data';
import CommentSection from './CommentSection';

//form for posting
export default class PostContainer extends React.Component {
    render() {
        return (
            <CommentSection />
            <Form>
                <FormGroup>
                    <Label for="post">Post Container</Label>
                    <Input type="textarea" name="text" id="post" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default PostContainer;