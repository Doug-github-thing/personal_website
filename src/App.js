import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <h1>Doug</h1>
            <p>Service Engineer II | Computer Engineering Graduate Student</p>
        </header>
        <div class="container">
            <h2>About Me</h2>
            <div class="bio">
                <p>Hello! I am a Service Engineer at a pharmaceutical CDMO, and I am currently pursuing my a Masters in Computer Engineering. Now have a click on these buttons!</p>
                <p>I love Carina all time.</p>
            </div>
            <div class="button-container">
                <button onClick={() => { console.log("clicked!") }}>Click</button>
                <a class="button" href="https://doug-github-thing.github.io/tictacslide/" target="iframe">TicTacSlide</a>
                <a class="button" href="https://doug-github-thing.github.io/snake/" target="iframe">Snake</a>
                <a class="button" href="https://github.com/Doug-github-thing/" target="_blank" rel="noopener noreferrer">My github</a>
            </div>
            <iframe name="iframe" frameborder="0" width="100%" height="400"></iframe>
        </div>
    </div>
  );
}

export default App;
