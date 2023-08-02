import axios from "axios";
export default function Footer() {
  function logout(){axios
    .post("/api/auth/logout")
    .then((response) => {
   //   console.log(response, "logout");
    })
    .catch((err) => {
      console.error(err);
    });
    
  }
  return (
    <div>
      <button onClick={logout()}>logout</button>
    </div>
  );
}
