import Post from "./Post";

/**
 * @param {*} posts A list of Post objects to display.
 * @returns A list of posts rendering on screen.
 */
const PostBody = ({ posts }) => {

    return (
    <>        
        {        
            posts?.map((this_post, index) => (
                <Post key={index} post={this_post}/>
            ))
        }
    </>
    );
}

export default PostBody;