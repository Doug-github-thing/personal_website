import "./App.css";
// For rendering components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import PostBody from "./components/body/PostBody";

// For reactively handling changes to the database, and updating each component.
import db from "./components/MyFirestore";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";


function App() {

    // Stores all currently available posts
    const [posts, setPosts] = useState(null);
    // Tracks which page is currently selected to be active in the body
    const [selected, setSelected] = useState("post0");


    // Gets all posts on app load
    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => {
            setPosts(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
        })
    }, []);


    // The site is arranged into a header at the top, and a zone-container in the remaining space.
    // The zone-container holds the navbar along the left, and main body content on the right.
    return (
        <div className="App">
            <div className="header">
                <Header setSelected={setSelected} />
            </div>

            <div className="zone-container">


                <div className="left-zone">
                    <div className="navbar">
                        <Navbar posts={posts} setSelected={setSelected} />
                    </div>
                </div>

                
                <div className="post-body">
                    <PostBody posts={posts} selected={selected} />
                </div>


            </div>
        </div>
    );
}

export default App;
