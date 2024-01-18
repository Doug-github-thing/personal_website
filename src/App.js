import "./App.css";
import Header from "./components/header/Header";
import EmbeddedPlayer from "./components/body/EmbeddedPlayer";
import PostBody from "./components/body/PostBody";

function App() {

    return (
        <div className="App">
            <header>
                <Header />
            </header>

            <div class="container">
                <PostBody/>
                <EmbeddedPlayer />
            </div>
        </div>
    );
}

export default App;
