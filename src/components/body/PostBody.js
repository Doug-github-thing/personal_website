import Post from "./Post";
import db from "../MyFirestore";

import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';

/**
 *  This component is a body element of the main page which acts as a container for a list of all posts.
 */
const PostBody = () => {

    // For tracking all currently available posts
    const [posts, setPosts] = useState(null);


    useEffect(()=>{
        fetchPost();
    }, [])


    const fetchPost = async () => {
        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData);                
                console.log(posts, newData);
            })
    }


    return (
    <>        
        {        
            posts?.map((this_post, index) => (
                <Post key={index} post={this_post}/>
            ))
        }
    </>
    );
}

export default PostBody;