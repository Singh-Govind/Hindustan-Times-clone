import axios from "axios";

function fetchData() {
  const API_KEY = "f5558ad371874012a8deea8931f7634d";

  return axios.get(
    `https://newsapi.org/v2/everything?q=Apple&apiKey=${API_KEY}`
  );
}

export default fetchData;
