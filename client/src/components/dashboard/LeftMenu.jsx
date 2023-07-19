import { Link } from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";

export default function LeftMenu({userInfo}) {
  return (
    <div style={{ backgroundColor:cols.white, width:"9rem"}} 
     className="col position-fixed overflow-auto container-fluid vh-100 d-flex-column justify-content-center align-items-center"
   >
     <div>

          {userMenuOptions.map((option) => (
            <Link
            to={`${option.linkTo}/${userInfo.username}`}
            key={option.name}
            style={{ width: "100%", minHeight: "4rem", backgroundColor:cols.lila}}
            className="col-md-3 my-4 p-1 text-center text-light text-decoration-none color-dark d-flex justify-content-center align-items-center"
            >

              <p style={{color: cols.black}}>{option.name}</p>
            </Link>
          ))}
          </div>
      
    </div>
  )
}
