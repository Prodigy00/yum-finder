import axios from "axios";
import { REACT_APP_API_KEY } from "react-native-dotenv";

console.log("real_key:", REACT_APP_API_KEY);

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`
  }
});
