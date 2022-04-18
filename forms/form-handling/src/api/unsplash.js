import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZocEeyrMy-FEKF_vTeO6zKckUMTe8EuDLRuCPNUo5HA",
  },
});
