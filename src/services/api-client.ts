import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "92dec94f397d47a98b9295781b383bf1",
  },
});
