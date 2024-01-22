import "./App.css";
// For rendering components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import PostBody from "./components/body/PostBody";

// For reactively handling changes to the database, and updating each component.
import db from "./components/MyFirestore";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";


function App() {

    // Stores all currently available posts
    const [posts, setPosts] = useState(null);


    // Gets all posts on app load
    useEffect(()=>{
        fetchPosts();
    }, [])


    // Get all posts from the datastore
    const fetchPosts = async () => {
        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData);                
                console.log(posts, newData);
            })
    }
    

    // The site is arranged into a header at the top, and a zone-container in the remaining space.
    // The zone-container holds the navbar along the left, and main body content on the right.
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <div className="zone-container">

                <div className="left-zone">
                    <div className="navbar">
                        <Navbar posts={posts}/>
                    </div>
                </div>

                <div className="right-zone">
                    <div className="body">
                    
                        <PostBody posts={posts}/>
                    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
