"use client";
import React, { useState, useEffect } from "react";
import { updateProduct } from "@/services/productService";
import { getAllCategories } from "@/services/categoryService";
import { useLanguage } from "@/contexts/LanguageContext";

const UpdateProductForm = ({ product, onProductUpdated, onClose, show }) => {
  const { t, currentLanguage } = useLanguage();

  const [formData, setFormData] = useState({
    description: "",
    price: "",
    categoryId: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        description: product.description || "",
        price: product.price || "",
        categoryId: product.categoryId || "",
      });
      setImagePreview(product.image || "");
    }
    fetchCategories();
  }, [product, currentLanguage]);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories(currentLanguage);
      if (response.success) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("categoryId", formData.categoryId);
      if (image) {
        formDataToSend.append("image", image);
      }

      console.log("Sending update data:", {
        description: formData.description,
        price: formData.price,
        categoryId: formData.categoryId,
      });

      const response = await updateProduct(product.id, formDataToSend);
      if (response.success) {
        onProductUpdated();
        onClose();
      } else {
        setError(response.message || "Failed to update product");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Form field changed:", name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1055,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog" style={{ margin: "1.75rem auto" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {t("update")} {t("product")}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  {t("description")}
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  {t("price")} *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="categoryId" className="form-label">
                  {t("category")}
                </label>
                <select
                  className="form-select"
                  id="categoryId"
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                >
                  <option value="">{t("selectCategory")}</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  {t("image")}
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? t("loading") : t("update")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductForm;
