import React from 'react';
import CommentSection from './CommentSection';

export default class Example extends React.Component {
    render() {
        return (
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