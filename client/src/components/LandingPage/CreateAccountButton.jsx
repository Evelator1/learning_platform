import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function WelcomePageButton({ content, color, textColor,linkto }) {
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
            background-color: ${color}; 
            color: ${textColor}; 
        }`}
      </style>
      <Link to={linkto}>
      <Button variant="flat" size="sm">
        {content}
      </Button>
      </Link>
    </>
  );
}

export default WelcomePageButton;
