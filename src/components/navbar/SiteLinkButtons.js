const SiteLinkButtons = () => {
    return ( 
        <div>
            {/* Original embedded player with buttons and a reserved block of space for the games */}
            {/* <div className="button-container">
                <button className="button" onClick={() => { console.log("clicked!") }}>Click</button>
                <a className="button" href="https://doug-github-thing.github.io/tictacslide/" target="iframe">TicTacSlide</a>
                <a className="button" href="https://doug-github-thing.github.io/snake/" target="iframe">Snake</a>
                <a className="button" href="https://github.com/Doug-github-thing/" target="_blank" rel="noopener noreferrer">My github</a>
            </div>
            <iframe name="iframe" frameBorder="0" width="100%" height="400"></iframe> */}

            {/* Newer format which places the buttons on the side of the navbar as regular links */}
            <div className="button-container">
                <a className="link" href="https://doug-github-thing.github.io/tictacslide/" target="_blank" rel="noopener noreferrer">TicTacSlide</a>
                <a className="link" href="https://doug-github-thing.github.io/snake/" target="_blank" rel="noopener noreferrer">Snake</a>
                <a className="link" href="https://github.com/Doug-github-thing/" target="_blank" rel="noopener noreferrer">My github</a>
            </div>
        </div>
    );
}

export default SiteLinkButtons;