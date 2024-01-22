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

    // The firestore timestamp is passed as a number of seconds in UTC epoch
    // This converts to a human readable east coast time
    const format_time = (timestamp) => {
        const date = timestamp.toDate();
        return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }

    return (<>
        <h2 id="title">{post.title}</h2>
        
        <p id="content">{post.content}</p>
        
        {/* If there is an attachment0, display it */}
        {post.attachment0 == null ? <></> : <>
            <img className="attachment" src={post.attachment0} />
            <p className="attachment-caption">Figure 1: {post.attachment0title}</p>
        </>}

        <p id="timestamp">{format_time(post.timestamp)}</p>
    </>);

}

export default Post;