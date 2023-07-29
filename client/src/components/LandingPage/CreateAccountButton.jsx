import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function WelcomePageButton({ content, color, textColor, linkto }) {
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
            background-color: ${color}; 
            color: ${textColor}; 
        }`}
      </style>

      <Button variant="flat" size="lg">
        <Link to={linkto}></Link>

        {content}
      </Button>
    </>
  );
}

export default WelcomePageButton;
