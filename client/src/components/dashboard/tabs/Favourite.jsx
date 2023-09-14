import React, { useContext, useEffect, useState } from "react";
import PostsFeedTab from "./userfeed/PostsFeedTab";
import PostsList from "../../communityQuestions/PostsList";
import { AuthContext } from "../../../context/AuthProvider";
import { axiosClient } from "../../../axiosClient";
import { json } from "react-router-dom";
import { path } from "file-system/vendor/util";


export default function Favourite( {posts} ) {
  const [savedPosts, setSavedPosts]=useState([])
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get("/post");
        const posts=(result.data)
        console.log("POSTS", posts);
        
        setSavedPosts(posts.filter((post)=>(post.saves= user._id)))
        console.log("saved",savedPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  // useEffect (()=>{
    // const savedPosts = posts.filter((post) => post.saves.includes(user._id));
    // console.log(savedPosts);
  // },[])

  // Use filter to find saved posts based on user._id
  

  return (
    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
     
      {/* {savedPosts.map((post) => (
        <div key={post._id}>{post.content}</div>
      ))} */}
      {/* <PostsList posts={posts}/> */}
    </div>
  );
}
