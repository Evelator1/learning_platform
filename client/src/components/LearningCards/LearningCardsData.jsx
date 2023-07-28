// import React, { useState, useEffect } from "react";
// import { axiosClient } from "../../axiosClient";

// function cardsData() {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     axiosClient
//       .get("http://localhost:3010/learningcards")
//       .then((response) => {
//         setCardData(response.data);
//       })

//       .catch((error) => {
//         console.log(error.message);
//       });
//   }, []);
// }
// export default cardsData;
