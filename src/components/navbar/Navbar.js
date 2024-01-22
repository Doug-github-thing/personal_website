import "./navbar.css";
import SiteLinkButtons from "./SiteLinkButtons";

/**
 * A component that sits on the left side of the screen and contains links to "pages"
 * clickable by the user, which transfer state to the main body component to render
 * the appropriate page.
 */
const Navbar = ({posts}) => {
    return (<>

        <h1>Posts</h1>

        {/* List of post titles */}
        {
            posts?.map((this_post, index) => (
                <p>{this_post.title}</p>
            ))
        }

        <h1>Links</h1>
        <SiteLinkButtons />

    </>);
}

export default Navbar;