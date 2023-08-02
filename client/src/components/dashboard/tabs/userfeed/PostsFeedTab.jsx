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
export default function PostsFeedTab() {
  const [posts, setPosts] = useState([]);


  
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
  }, []);

  return (
    <Container style={{ backgroundColor: cols.black, display:"flex", justifyContent:"center", marginLeft:"2rem"}}>
      <Row className="col-lg-9 col-md-10 col-sm-12" >
        <Col>
          <CreatePostMask posts={posts} setPosts={setPosts}/>
          <PostsList posts={posts} setPosts={setPosts} />
        </Col>
      </Row>
    </Container>
  );
}
