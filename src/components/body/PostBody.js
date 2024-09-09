import EditPostForm from "./EditPostForm";
import Post from "./Post";
import "./body.css";

/**
 * Searches through the raw data arrays for any post that has the same ID as the currently selected ID.
 * Expected behavior is to display only one post on the screen at a time.
 * 
 * @param {*} posts A list of Post objects with all of their data.
 * @param {string} selected The string representation of the postId for the post currently selected.
 * @returns A rendering of only the post that shares a "postId" with the currently selected postId.
 */
const PostBody = ({ posts, selected }) => {

    return (
    <>
        {
            selected === "new" ?
                <EditPostForm />
            :
                <></>
        }
        {
            posts?.map((this_post, index) => (
                // If this post is the one that is selected, display it on screen.
                this_post.id === selected ? 
                    <div key={index}>
                        <Post post={this_post}/>
                    </div>
                :
                // blank div when this post element is not "selected"
                <div key={index}></div>
            ))
        }
    </>);
}

export default PostBody;