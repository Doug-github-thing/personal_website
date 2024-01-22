import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import EmbeddedPlayer from "./components/body/EmbeddedPlayer";
import PostBody from "./components/body/PostBody";

function App() {

    // The non-header section of the site is divided into a left and right zone 
    // for the navbar and the site's body content
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <div className="zone-container">

                <div className="left-zone">
                    <div className="navbar">
                        <Navbar />
                    </div>
                </div>

                <div className="right-zone">
                    <div className="body">
                    </div>

                    <PostBody/>
                    <EmbeddedPlayer />
                </div>

            </div>
        </div>
    );
}

export default App;
