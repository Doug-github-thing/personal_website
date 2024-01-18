const EmbeddedPlayer = () => {
    return ( 
        <div>
            <div class="button-container">
                <button onClick={() => { console.log("clicked!") }}>Click</button>
                <a class="button" href="https://doug-github-thing.github.io/tictacslide/" target="iframe">TicTacSlide</a>
                <a class="button" href="https://doug-github-thing.github.io/snake/" target="iframe">Snake</a>
                <a class="button" href="https://github.com/Doug-github-thing/" target="_blank" rel="noopener noreferrer">My github</a>
            </div>
            <iframe name="iframe" frameborder="0" width="100%" height="400"></iframe>
        </div>
    );
}

export default EmbeddedPlayer;