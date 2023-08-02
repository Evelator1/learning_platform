import axios from "axios";

export default function FetchJobHardCoded({ setJobs }) {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Marketing Analist Germany",
      page: "",
      num_pages: "20",
    },
    headers: {
      "X-RapidAPI-Key": "ecb3b37079msh225eb66a9ebe28ap1d6e60jsn78c8d3b347f3",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);

      const jobDataArray = response.data;

      console.log(jobDataArray.data);

      jobDataArray.data.map((ad) => {
        axios
          .post("http://localhost:3010/jobs/newJob", ad)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      console.log("Data was sent to the backend successfully");
    } catch (error) {
      console.error("Error while fetching or sending data:", error);
    }
  }

  fetchData();
}





// const fetchJobs = async (data) => {
//   const options = {
//     method: "GET",  
//     url: "https://jsearch.p.rapidapi.com/search",
//     params: {
//       query: data.JobSearchQuery,  
//       page: "1",
//       num_pages: "10",
//     },
//     headers: {
//  'X-RapidAPI-Key': 'ecb3b37079msh225eb66a9ebe28ap1d6e60jsn78c8d3b347f3',  
//  'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//  }
//   };

//   try {
//     const response = await axios.request(options);  
//     setJobs(response.data);
//     console.log(response.data, "is the result of the query");
//     setSearchStatus("completed");
//   } catch (error) {
//     console.error(error);  
//     setSearchStatus("completed");
//   }

// };
