import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function WelcomePageButton({ content, color, textColor,linkTo }) {
  return (
    <div style={{backgroundColor:color, color:textColor, width:"10rem"}}>



      <Link to={linkTo}>
      <Button variant="flat" size="md" >
        {content}
      </Button>
      </Link>
    </div>
  );
}

export default WelcomePageButton;
