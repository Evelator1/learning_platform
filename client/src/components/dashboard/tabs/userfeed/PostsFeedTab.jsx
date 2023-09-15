import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { axiosClient } from "../../../../axiosClient";
import { useEffect, useState } from "react";
import PostsList from "../../../communityQuestions/PostsList";
import CreatePostMask from "./CreatePostMask";
import { cols } from "../../../../colorSchema";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import Favourite from "../Favourite";



export default function PostsFeedTab() {
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosClient.get("/post");
        setPosts(result.data);
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
  // console.log("postsfeedtabs",posts);

  return (
    <Container style={{ backgroundColor: cols.black, display:"flex", justifyContent:"center", marginLeft:"2rem"}}>
      <Row className="col-lg-9 col-md-10 col-sm-12" >
        <Col>
          <CreatePostMask posts={posts} setPosts={setPosts}/>
          <PostsList posts={posts} setPosts={setPosts} comments={comments} setcomments={setcomments} />
        </Col>
      </Row>
    </Container>
  );
}
