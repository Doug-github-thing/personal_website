import "./navbar.css";
import SiteLinkButtons from "./SiteLinkButtons";

/**
 * A component that sits on the left side of the screen and contains links to "pages"
 * clickable by the user, which transfer state to the main body component to render
 * the appropriate page.
 */
const Navbar = () => {
    return (<>

        <h3>This is the navbar</h3>
        <p>Navbar item 1</p>
        <p>Navbar item 2</p>
        <p>Navbar item 3</p>
        <p>Navbar item 4</p>
        <h1>Links</h1>
        <SiteLinkButtons />

    </>);
}

export default Navbar;