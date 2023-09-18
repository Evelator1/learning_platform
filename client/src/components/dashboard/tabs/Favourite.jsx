import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { axiosClient } from "../../../axiosClient";
import PostsList from "../../communityQuestions/PostsList";
import QuestionsList from "../../interviewQuestions/QuestionsList";
import Carousel from "react-bootstrap/Carousel";
import "./Favourite.css";

export default function Favourite() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedQuest, setSavedQuest] = useState([]);

  const showFilter = "filterHidden";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get("/post");
        setPosts(result.data);
        setSavedPosts(
          posts.filter((post) => JSON.stringify(post.saves).includes(user._id))
        );
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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get("/interviewQuestions");
      setData(response.data);
      setSavedQuest(
        response.data.filter((question) =>
          JSON.stringify(question.saves).includes(user._id)
        )
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="favorites">
      {
        savedQuest.length > 0?

      <div className="savedQuestionsCarousel">
        <h4 style={{color:"white", marginBottom:"50px"}}>Saved Questions:</h4>
      <Carousel>
        {savedQuest.map((question, index) => (
          <Carousel.Item key={index}>
            <QuestionsList
              data={[question]}
              loading={loading}
              setLoading={setLoading}
              isFavoritesSection={true}
              
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      :
      <h4>No saved Questions</h4>
      }
      {savedPosts.length>0?
      <div className="savedPostsCarousel">
      <h4 style={{color:"white", marginBottom:"50px"}}>Saved Posts:</h4>
      <Carousel >
        {savedPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <PostsList posts={[post]}  comments={comments} setcomments={setcomments} />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      :
      <h4>No saved Posts</h4>
      }
    </div>
    
  );
}
