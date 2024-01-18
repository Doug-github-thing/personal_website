import { useState } from "react";
import Post from "./Post";

/**
 *  This component is a body element of the main page which acts as a container for a list of all posts.
 */
const PostBody = () => {

    // For tracking all currently available posts
    const [posts, setPosts] = useState(null);

    // A temporary 'post' object used as a placeholder to display a Post
    const hardcoded_post = {"title":"About Me", "attachments":"", "timestamp":"420:203:42 AM", "content":"Hello! I am a Service Engineer at a pharmaceutical CDMO, and I am currently pursuing my a Masters in Computer Engineering. Now have a click on these buttons!\nI love Carina all time."}

    return <Post post={hardcoded_post}/>;
}

export default PostBody;