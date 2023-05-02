import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "34429700-a5059cc9453f6d8a6aa28d125";
axios.defaults.baseURL = 
`${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal`;

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(`&per_page=12&page=${page}&q=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

