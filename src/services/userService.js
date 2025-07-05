import apiClient from "./api";

const register = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Registration failed";
    console.error("Register service error:", message);
    throw new Error(message);
  }
};

const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/auth/users");
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Fetching users failed";
    console.error("Get all users service error:", message);
    throw new Error(message);
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await apiClient.put(`/auth/users/${id}`, data);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Updating user failed";
    console.error("Update user service error:", message);
    throw new Error(message);
  }
};

const activateUser = async (id) => {
  try {
    const response = await apiClient.patch(`/auth/users/${id}/activate`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Activating user failed";
    console.error("Activate user service error:", message);
    throw new Error(message);
  }
};

const deactivateUser = async (id) => {
  try {
    const response = await apiClient.patch(`/auth/users/${id}/deactivate`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Deactivating user failed";
    console.error("Deactivate user service error:", message);
    throw new Error(message);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/auth/users/${id}`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Deleting user failed";
    console.error("Delete user service error:", message);
    throw new Error(message);
  }
};

export {
  register,
  getAllUsers,
  updateUser,
  activateUser,
  deactivateUser,
  deleteUser,
};
