/**
 * Takes all data from a post object from the firestore database, and displays it.
 * Expects an object of the form:
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
        <h2>{post.title}</h2>
        
        <p className="content">{post.content}</p>
        
        {/* {post.attachments == null ? <>no attachment</> :
            <p className="attachments">The post's attachments are: {post.attachments}</p>} */}

        <p className="timestamp">{format_time(post.timestamp)}</p>
    </>);

}

export default Post;