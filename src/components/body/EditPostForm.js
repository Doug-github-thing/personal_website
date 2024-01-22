import { useState } from "react";

import { doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../MyFirestore";

/**
 * 
 * @param {Object} post A post object containing data of the post to be edited.
 *                      Null if this form is being used for a new post.
 * 
 * @returns 
 */
const EditPostForm = ({ post, cancelEditingStatus }) => {

    // If no Post object was passed to this component, then it will act to create a New post.
    // Else it will behave as an Edit post form.
    const isNew = (post == null ? true : false);

    // Tracks input form status
    const [title, setTitle] = useState(isNew ? "" : post.title);
    const [content, setContent] = useState(isNew ? "" : post.content);


    // Called when submit is called while the form is in New mode
    const submitNew = async () => {

        if (content === "" && title === "") {
            console.log("incomplete post");
            return;
        }

        //TODO make this do logic to determine a real ID!
        const newPostId = "400";

        const newPost = {
            title: title,
            content: content,
            postId: newPostId,
            postId: newPostId,
            timestamp: Timestamp.fromDate(new Date())
        };

        await setDoc(doc(db, "posts", `post${newPostId}`), newPost);

        cancelEditingStatus();
    }

    // Called when submit is called while the form is in Edit mode
    const submitEdit = async () => {
        if ( post.content === content && post.title === title) {
            console.log("no changes made");
            cancelEditingStatus();
            return;
        }

        // Build a new Post object to replace the old
        let updatedPost = post;
        updatedPost.title = title;
        updatedPost.content = content;
        updatedPost.timestamp = Timestamp.fromDate(new Date());
        // Make the change
        await setDoc(doc(db, "posts", `post${post.postId}`), updatedPost);
    }

    // Called when the form submit is clicked
    const submit = async () => {
        isNew ? await submitNew() : await submitEdit();
    }

    const cancel = () => {
        cancelEditingStatus();
    }

    const updateTitleCallback = () => {
        const text = document.getElementById("title-field").value;
        setTitle(text);
    }

    const updateContentCallback = () => {
        const text = document.getElementById("content-field").value;
        setContent(text);
    }


    return (
        <form action={submit}>
            <p>Title:</p>
            <textarea type="text"
                id="title-field"
                defaultValue={post?.title}
                onInput={updateTitleCallback}
                rows={1} cols={40}
                />
            
            <p>Content:</p>
            <textarea type="text" 
                id="content-field"
                defaultValue={post?.content}
                onInput={updateContentCallback}
                rows={4} cols={40}
                />

            <br />
            <button type="button" onClick={cancel}>Cancel</button>
            <button type="button" onClick={submit} name="submit" value="submit">Submit</button>
        </form>
    );
};

export default EditPostForm;