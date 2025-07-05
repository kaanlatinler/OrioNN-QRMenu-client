import apiClient from "./api";

const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Login failed";
    console.error("Login service error:", message);
    throw new Error(message);
  }
};

const TOKEN_KEY = "token";

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

function isAuthenticated() {
  return Boolean(getToken());
}

export { login, setToken, getToken, removeToken, isAuthenticated };
