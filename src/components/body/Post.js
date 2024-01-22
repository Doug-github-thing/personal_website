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
        <h2 className="title">{post.title}</h2>
        
        <p className="content">{post.content}</p>
        
        {/* If there is an attachment0, display it */}
        {post.attachment0 == null ? <></> :
            <img className="attachment" src={post.attachment0} />}

        <p className="timestamp">{format_time(post.timestamp)}</p>
    </>);

}

export default Post;