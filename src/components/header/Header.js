import "./header.css";

/**
 * Renders the site header. If the user clicks the h1 title, it calls setSelected to
 * set the state to the homepage (post #0).
 * 
 * @param {function} setSelected A callback function to set the currently selected post.  
 * @returns 
 */
const Header = ({ setSelected }) => {
    return ( 
        <div className="header-text">
            <h1 onClick={() => setSelected("post0")}>Doug Rynar</h1>
            <p>Computer Engineering Graduate Student | Service Engineer II</p>
        </div>
    );
}

export default Header;