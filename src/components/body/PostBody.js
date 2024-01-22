import Post from "./Post";

/**
 * Searches through the raw data arrays for any post that has the same ID as the currently selected ID.
 * Expected behavior is to display only one post on the screen at a time.
 * 
 * @param {*} posts A list of Post objects with all of their data.
 * @returns A rendering of only the post that shares a "postId" with the currently selected postId.
 */
const PostBody = ({ posts, selected }) => {

    return (
    <>
        {
            posts?.map((this_post, index) => (
                // If this post is the one that is selected, display it on screen.
                this_post.postId === selected ? 
                    <Post key={index} post={this_post}/>
                : <></>
            ))
        }
    </>);
}

export default PostBody;