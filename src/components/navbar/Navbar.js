import "./navbar.css";
import SiteLinkButtons from "./SiteLinkButtons";

/**
 * A component that sits on the left side of the screen and contains links to "pages"
 * clickable by the user, which transfer state to the main body component to render
 * the appropriate page.
 */
const Navbar = ({ posts, setSelected }) => {
    return (
    <>

        <h1 className="posts-header">My Projects</h1>

        {/* List of post titles */}
        {
            posts?.map((this_post, index) => (
                <div className="post-title" key={index} onClick={ () => setSelected(this_post.postId) }>
                    {this_post.title}</div>
            ))
        }

        <div className="new-post-button" onClick={ () => setSelected("new") }>
            Add Project</div>

        <h1 className="links-header">Links</h1>
        <SiteLinkButtons />

    </>);
}

export default Navbar;