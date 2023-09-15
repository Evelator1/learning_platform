import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { axiosClient } from "../../../axiosClient";
import PostsList from "../../communityQuestions/PostsList";



export default function Favourite() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [savedPosts, setSavedPosts]=useState([])


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get("/post");
        setPosts(result.data);
        setSavedPosts(posts.filter((post)=>JSON.stringify(post.saves).includes(user._id)))
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [posts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get("/comments");
        setcomments(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [comments]);


  return (
    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
     
     <PostsList posts={savedPosts}  comments={comments} setcomments={setcomments} />
    </div>
  );
}
