import axios from "axios";
// const API_KEY = "f5558ad371874012a8deea8931f7634d";
// const API_KEY = "c108b1ff343646bfb67883f3e054ab81";
const API_KEY = "5b6f4ebfb448431e9cc9ec1b0cd6a259";

function fetchData(cat) {
  if (cat == undefined) cat = "Entertainment";
  return axios.get(
    `https://newsapi.org/v2/everything?q=${cat}&sortBy=popularity&pageSize=15&apiKey=${API_KEY}`
  );
}

export function topHeadLines() {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${API_KEY}`
  );
}

export function getFromHindustanTimes() {
  return axios.get(
    `https://newsapi.org/v2/everything?domains=hindustantimes.com&pageSize=8&apiKey=${API_KEY}`
  );
}

export default fetchData;
