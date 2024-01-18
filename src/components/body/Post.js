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

    return (<>
        <h2>{post.title}</h2>
        <p class="content">The post's content is: {post.content}</p>
        <p>The post's attachments are: {post.attachments}</p>
        <p>timestamp: {post.timestamp}</p>
    </>);

}

export default Post;