import axios from "axios";

const API_URL = "http://localhost:7000/api/auth";

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

const logout = async () => {
  const response = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const authService = {
  login,
  logout,
};

export default authService;
