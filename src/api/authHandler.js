import axios from "axios";

export const authHandler = async (payload, url) => {
  try {
    const res = await axios.post(`http://localhost:8000/auth/${url}`, payload);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
