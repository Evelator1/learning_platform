import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function WelcomePageButton({ content, color, textColor, linkTo }) {
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
          font-family:" IBM Plex Mono" , monospace;
            background-color: ${color}; 
            color: ${textColor}; 
            border-color: ${color}
        }
        
        .btn-flat:hover {
            color: ${color}; 
            border-color: ${color}
        }
        
        
        `}
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
