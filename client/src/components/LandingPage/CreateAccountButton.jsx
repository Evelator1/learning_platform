import Button from "react-bootstrap/Button";

function WelcomePageButton({ content, color, textColor }) {
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
            background-color: ${color}; 
            color: ${textColor}; 
        }`}
      </style>
      <Button variant="flat" size="lg">
        {content}
      </Button>
    </>
  );
}

export default WelcomePageButton;
