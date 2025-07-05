import apiClient from "./api";

export const getAllUsers = async (params = {}) => {
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append("page", params.page);
  if (params.limit) queryParams.append("limit", params.limit);
  if (params.isActive !== undefined)
    queryParams.append("isActive", params.isActive);
  if (params.search) queryParams.append("search", params.search);
  if (params.sortBy) queryParams.append("sortBy", params.sortBy);
  if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder);

  const url = `/auth/users${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;
  const res = await apiClient.get(url);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await apiClient.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (data) => {
  const res = await apiClient.post("/auth/register", data);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await apiClient.put(`/auth/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await apiClient.delete(`/auth/users/${id}`);
  return res.data;
};

export const activateUser = async (id) => {
  const res = await apiClient.patch(`/auth/users/${id}/activate`);
  return res.data;
};

export const deactivateUser = async (id) => {
  const res = await apiClient.patch(`/auth/users/${id}/deactivate`);
  return res.data;
};

export const changePassword = async (id, data) => {
  const res = await apiClient.put(`/auth/users/${id}/password`, data);
  return res.data;
};

export const login = async (data) => {
  const res = await apiClient.post("/auth/login", data);
  return res.data;
};
