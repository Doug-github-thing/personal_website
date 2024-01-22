import EditPostForm from "./EditPostForm";

import { useState } from "react";
import { ReactComponent as EditIcon } from "../../edit-icon.svg";

/**
 * Takes all data from a post object from the firestore database, and displays it.
 * Expects an object of the form:
 * "postId": <string>
 * "title": <string>
 * "content": <string>
 * "timestamp": <timestamp>
 * "attachments": <string>
 * 
 * @param {Object} post Post object containing all post data. 
 */
const Post = ({ post }) => {

    // For tracking if the current post is currently being edited.
    const [isEditing, setIsEditing] = useState(false);


    // Toggle edit mode when the edit button is clicked
    const editCallback = () => {
        const editingValue = isEditing ? false : true;
        setIsEditing(editingValue);
    }


    // The firestore timestamp is passed as a number of seconds in UTC epoch
    // This converts to a human readable east coast time
    const formatTime = (timestamp) => {
        const date = timestamp.toDate();
        return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }


    return (<>

        <div id="title-wrapper">
            <h2 id="title">{post.title} </h2>
            <div id="edit-icon" onClick={() => editCallback()}><EditIcon width="20px" height="20px" /></div>
        </div>
        

        {/* Display edit form while in "editing" state */}
        {!isEditing ?
                <>
                    <p id="content">{post.content}</p>
                
                    {/* If there is an attachment0, display it */}
                    {post.attachment0 == null ? <></> : <>
                        <img className="attachment" src={post.attachment0} />
                        <p className="attachment-caption">Figure 1: {post.attachment0title}</p>
                    </>}

                    <p id="timestamp">{formatTime(post.timestamp)}</p>
                </> 
            :
            <EditPostForm post={post} cancelEditingStatus={() => setIsEditing(false)}/>
        }
                
    </>);

}

export default Post;