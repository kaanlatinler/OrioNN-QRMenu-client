import apiClient from "./api";

export const getAllProducts = async (language = "tr") => {
  const res = await apiClient.get(`/products?language=${language}`);
  return res.data;
};

export const getActiveProducts = async (language = "tr") => {
  const res = await apiClient.get(
    `/products?isActive=true&language=${language}`
  );
  return res.data;
};

export const getProductById = async (id, language = "tr") => {
  const res = await apiClient.get(`/products/${id}?language=${language}`);
  return res.data;
};

export const createProduct = async (data) => {
  const res = await apiClient.post("/products", data);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await apiClient.put(`/products/${id}`, data);
  return res.data;
};

export const activateProduct = async (id) => {
  const res = await apiClient.patch(`/products/${id}/activate`);
  return res.data;
};

export const deactivateProduct = async (id) => {
  const res = await apiClient.patch(`/products/${id}/deactivate`);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await apiClient.delete(`/products/${id}`);
  return res.data;
};
