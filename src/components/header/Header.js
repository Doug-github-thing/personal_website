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
            <a href={"https://engineering.lehigh.edu/ece"}>Computer Engineering Masters Student - Lehigh University</a>
            <p></p>
            <a href={"https://www.pacelabs.com/life-sciences/"}>Equipment Specialist III - Pace Analytical Life Sciences</a>
        </div>
    );
}

export default Header;
