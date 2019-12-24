import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qXbCfrjWHL113ZrCGEYpWZIhMQ14twracZrjZFG_wg9EvQDIw4H421tBuLtgIjmj_bMkQGKggR1ahmPVRqZjvTOpejSb1_BW-PpoWBhjuNdZ9ryleryxXzjdRRMCXnYx"
  }
});
