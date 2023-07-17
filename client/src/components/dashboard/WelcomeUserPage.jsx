import { Link } from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import axios from "axios";

export default function WelcomeUserPage({ userInfo }) {
  const sendPreferences = (e) => {
    console.log(e.target.checked);
    const updatedUserInfo = {
      ...userInfo,
      userWishWelcome: e.target.checked,
    };
    axios
      .put(`http://localhost:3010/users/${userInfo._id}`, updatedUserInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
console.log(cols)
  return (
    <div className="position-fixed overflow-auto container-fluid vh-100 d-flex-column justify-content-center align-items-center"
    style={{ backgroundColor:cols.yellow}}>
      <h1 className="fs-1 mt-5 p-0
       text-center">Welcome {userInfo.username}!</h1>
      <div className="w-sm-75 p-5  d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-around">
          {userMenuOptions.map((option) => (
            <Link
              to={`${option.linkTo}`}
              key={option.name}
              style={{ width: "18rem", minHeight: "15rem", backgroundColor:cols.blue }}
              className="col-md-3 m-5 p-0 rounded-5 text-light text-decoration-none color-dark d-flex justify-content-center align-items-center"
            >
              <div className="row text-center">

              <h4>{option.name}</h4>
              <h4>{option.description}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          onChange={sendPreferences}
          defaultChecked={userInfo.userWishWelcome}
        />
        <span className="form-check-span"> View welcome message on login</span>
      </div>
    </div>
  );
}
