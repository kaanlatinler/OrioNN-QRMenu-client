import apiClient from "./api";

export const getAllCategories = async (language = "tr") => {
  const res = await apiClient.get(`/categories?language=${language}`);
  return res.data;
};

export const getActiveCategories = async (language = "tr") => {
  const res = await apiClient.get(
    `/categories?isActive=true&language=${language}`
  );
  return res.data;
};

export const getCategoryById = async (id, language = "tr") => {
  const res = await apiClient.get(`/categories/${id}?language=${language}`);
  return res.data;
};

export const getCategoryByTitle = async (title, language = "tr") => {
  const res = await apiClient.get(
    `/categories/title/${title}?language=${language}`
  );
  return res.data;
};

export const createCategory = async (data) => {
  const res = await apiClient.post("/categories", data);
  return res.data;
};

export const updateCategory = async (id, data) => {
  const res = await apiClient.put(`/categories/${id}`, data);
  return res.data;
};

export const deleteCategory = async (id) => {
  const res = await apiClient.delete(`/categories/${id}`);
  return res.data;
};

export const activateCategory = async (id) => {
  const res = await apiClient.patch(`/categories/${id}/activate`);
  return res.data;
};

export const deactivateCategory = async (id) => {
  const res = await apiClient.patch(`/categories/${id}/deactivate`);
  return res.data;
};
