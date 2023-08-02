import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function WelcomePageButton({ content, color, textColor, linkTo, type }) {
  const navigate = useNavigate();
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
          font-family:" IBM Plex Mono" , monospace;
            background-color: ${color}; 
            color: ${textColor}; 
            border-color: ${textColor};
        }
        .btn-flat:hover {
          background-color: ${textColor}; 
            color: ${color}; 
            border-color: ${color}
        }
        `}
      </style>

      <Button
      type={type?"submit":""}
        variant="flat"
        size="md"
        onClick={() => {
          if (linkTo) {
            navigate(linkTo);
          }
        }}
      >
        {content}
      </Button>
    </>
  );
}


