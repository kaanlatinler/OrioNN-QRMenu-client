import apiClient from "./api";

const getAllRoles = async () => {
  try {
    const response = await apiClient.get("/roles");
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Fetching roles failed";
    console.error("Get all roles service error:", message);
    throw new Error(message);
  }
};

export { getAllRoles };
