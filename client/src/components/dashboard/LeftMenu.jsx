import { Link } from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import axios from "axios";

export default function LeftMenu() {
  return (
    <div style={{ backgroundColor:cols.yellow, width:"9rem"}} 
     className="col position-fixed overflow-auto container-fluid vh-100 d-flex-column justify-content-center align-items-center"
   >
     <div>

          {userMenuOptions.map((option) => (
            <Link
            to={`${option.linkTo}`}
            key={option.name}
            style={{ width: "7rem", minHeight: "5rem", backgroundColor:cols.blue }}
            className="col-md-3 m-1 p-1 rounded-5 text-light text-decoration-none color-dark d-flex justify-content-center align-items-center"
            >
              <div className="row text-center">

              <p>{option.name}</p>
              </div>
            </Link>
          ))}
          </div>
      
    </div>
  )
}
