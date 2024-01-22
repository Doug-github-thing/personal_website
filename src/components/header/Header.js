
/**
 * Renders the site header. If the user clicks the h1 title, it calls setSelected to
 * set the state to the homepage (post #0).
 * 
 * @param {function} setSelected A callback function to set the currently selected post.  
 * @returns 
 */
const Header = ({ setSelected }) => {
    return ( 
        <div>
            <h1 onClick={() => setSelected("0")}>Doug</h1>
            <p>Service Engineer II | Computer Engineering Graduate Student</p>
        </div>
    );
}

export default Header;