import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../context/AuthProvider";
import  { useState, useEffect , useContext} from "react";
import { axiosClient } from "../../../../axiosClient";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./learningCards.css";
import { cols } from "../../../../colorSchema";
import WelcomePageButton from "../../../LandingPage/WelcomePageButton";



export default function NewLearningCard() {
  const { user } = useContext(AuthContext);

  const[showBtn, setShowBtn]=useState(false)
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");

  // const handleCategory = (category) => {
  //   setCategory(category);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCard = await axiosClient.post(
        "http://localhost:3010/learningcards/createlearningcard",
        {
          question,
          answer,
          category,
          group,
        }
      );
      setShowBtn(true)
      console.log(newCard.data);
      setQuestion("");
      setAnswer("");
      setCategory("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div style={{display:"flex", justifyContent:"center", color:cols.white}}>

    <h1>Create a Learning Card</h1>
    </div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="h5 text-white">
            Set the question for the card
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="h5 text-white">Set the answer</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </Form.Group>
        <div className="row">
          <div className="col-12">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Technical question">Technical Question</option>
              <option value="Non-technical question">
                Non-technical Question
              </option>
            </select>

            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="">Select level of difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

<div style={{display:"flex", marginTop:"4rem"}}>


            
        <Button
          type="submit"
          style={{ backgroundColor: cols.lila, color:cols.black, height:"auto", marginRight:"3rem", fontFamily:" IBM Plex Mono", border:"none"  }}
        >
          Submit
        </Button>
        {showBtn&& 
        <WelcomePageButton 
        content={"Show all cards"}
        color={cols.lila}
        textColor={cols.black}
        linkTo={`/${user.username}/learning-cards`}
      />}
          </div>

      </Form>
      
    </>
  );
  
}
