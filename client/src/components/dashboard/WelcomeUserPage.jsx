import { Link } from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import axios from "axios";

export default function WelcomeUserPage({ userInfo }) {



  const sendPreferences = (e) => {
    const updatedUserInfo = {
      userWishWelcome: e.target.checked,
    };
    axios
      .put(`http://localhost:3010/users/${userInfo.id}`, updatedUserInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="position-fixed overflow-auto container-fluid vh-100 overflow-scroll d-flex-column justify-content-center align-items-center"
      style={{ backgroundColor: cols.black, marginTop: "5rem" }}
    >
      <h1
        className="fs-1 mt-5 p-0
       text-center"
        style={{ color: cols.blue }}
      >
        Welcome {userInfo.username}!
      </h1>
      <div className="w-100 p-5  d-flex-column justify-content-center align-items-center">
        <div className="row d-flex justify-content-around">
          {userMenuOptions.map((option) => (
            <Link
              to={`${option.linkTo}/${userInfo.username}`}
              key={option.name}
              style={{
                width: "18rem",
                minHeight: "12rem",
                backgroundColor: cols.pink,
              }}
              className="col-3 m-5 p-0 rounded-1 text-light text-decoration-none color-dark d-flex justify-content-center align-items-center"
            >
              <div className="row text-center" style={{ color: cols.blue }}>
                <h4>{option.name}</h4>
                <h4>{option.name}</h4>
              </div>
            </Link>
          ))}
 <div className="form-check">
          <input
            type="checkbox"
            onChange={sendPreferences}
            defaultChecked={userInfo.userWishWelcome}
          />
          <span className="form-check-span">
            {" "}
            View welcome message on login
          </span>
        </div>
        </div>
       
      </div>
    </div>
  );
}
