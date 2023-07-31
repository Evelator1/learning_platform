import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function WelcomePageButton({ content, color, textColor, linkTo }) {
  return (
    // <div style={{backgroundColor:color, color:textColor, width:"10rem"}}>
    <>
      <style type="text/css">
        {`.btn-flat {
            background-color: ${color}; 
            color: ${textColor}; 
           
        }`}
      </style>
      <Link to={linkTo}>
        <Button variant="flat" size="md">
          {content}
        </Button>
      </Link>
    </>
  );
}

export default WelcomePageButton;
