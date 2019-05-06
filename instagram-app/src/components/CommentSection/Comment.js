import React from 'react';


//form for submiting a comment
export default class Comment extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="comment">Post Container</Label>
                    <Input type="textarea" name="text" id="comment" />
                </FormGroup>
                <Button>Comment</Button>
            </Form>
        );
    }
}

export default Comment;