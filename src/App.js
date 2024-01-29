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
            const unorderedPosts = snapshot.docs.map((doc)=>({...doc.data(), id: doc.id}))
            setPosts(orderPosts(unorderedPosts));
        });
    }, []);


    // Given a map of posts, puts them in timestamp order and returns chronologically
    // but with the About Me post at the front.
    // For displaying the Navbar posts in order.
    function orderPosts(unorderedPosts) {
        
        // Create empty, will populate by iterating
        let aboutMePost = null;
        let postsWithoutAbout = [];

        // Populate posts list, and separate out About Me post
        unorderedPosts.forEach(post => {
            if (post.id !== "post0")
                postsWithoutAbout.push(post);
            else
                aboutMePost = post;
        });

        // Sorts posts by timestamp
        postsWithoutAbout.sort( (post1,post2) => post2.timestamp - post1.timestamp );

        // Put the About Me at the top, then immediately return
        postsWithoutAbout.unshift(aboutMePost)
        return postsWithoutAbout;
    };


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
