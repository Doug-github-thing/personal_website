import { useState } from "react";

import { doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../MyFirestore";

const EditPostForm = ({ post, cancelEditingStatus }) => {

    // Tracks input form status
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);


    // Called when the form submit is clicked
    const submit = async () => {

        if ( post.content == content && post.title == title) {
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

        cancelEditingStatus();
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
                defaultValue={post.title}
                onInput={updateTitleCallback}
                rows={1} cols={40}
                />
            
            <p>Content:</p>
            <textarea type="text" 
                id="content-field"
                defaultValue={post.content}
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