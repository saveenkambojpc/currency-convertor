import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://currency-exchange.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    'X-RapidAPI-Key': '655248b5a6msh4bde64ab1bfa440p1c3fb5jsnde9ddf9dc202',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
});

export default axiosInstance;