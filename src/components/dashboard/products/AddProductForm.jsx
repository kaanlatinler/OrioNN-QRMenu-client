"use client";
import React, { useState, useEffect } from "react";
import { createProduct } from "@/services/productService";
import { getAllCategories } from "@/services/categoryService";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AddProductForm({ onProductAdded }) {
  const { t, currentLanguage, getAvailableLanguages } = useLanguage();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTranslations, setShowTranslations] = useState(false);
  const [translations, setTranslations] = useState({});

  const availableLanguages = getAvailableLanguages();
  const defaultLanguage = "tr";

  useEffect(() => {
    fetchCategories();
  }, [currentLanguage]);

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

  const handleTranslationChange = (language, field, value) => {
    setTranslations((prev) => ({
      ...prev,
      [language]: {
        ...prev[language],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("categoryId", categoryId);
      if (image) {
        formData.append("image", image);
      }

      // Add translations if any exist
      const validTranslations = {};
      Object.entries(translations).forEach(([language, data]) => {
        if (data.title && data.title.trim()) {
          validTranslations[language] = {
            title: data.title.trim(),
            description: data.description?.trim() || "",
          };
        }
      });

      if (Object.keys(validTranslations).length > 0) {
        formData.append("translations", JSON.stringify(validTranslations));
      }

      await createProduct(formData);
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
      setImagePreview("");
      setCategoryId("");
      setTranslations({});
      setShowTranslations(false);
      if (onProductAdded) onProductAdded();
      window?.bootstrap?.Modal.getOrCreateInstance(
        document.getElementById("addProductModal")
      ).hide();
    } catch (err) {
      setError(err.message || t("error"));
    } finally {
      setLoading(false);
    }
  };

  const getLanguageName = (code) => {
    const lang = availableLanguages.find((l) => l.code === code);
    return lang ? lang.name : code;
  };

  return (
    <div
      className="modal fade"
      id="addProductModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {t("add")} {t("product")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="mb-3">
                    {getLanguageName(defaultLanguage)} ({t("default")})
                  </h6>
                  <div className="mb-3">
                    <label className="form-label">{t("title")} *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">{t("description")}</label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">{t("price")} *</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">{t("image")}</label>
                    <input
                      type="file"
                      className="form-control"
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
                  <div className="mb-3">
                    <label className="form-label">{t("category")} *</label>
                    <select
                      className="form-select"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                      required
                    >
                      <option value="">{t("selectCategory")}</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0">{t("translations")}</h6>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => setShowTranslations(!showTranslations)}
                    >
                      {showTranslations ? t("hide") : t("show")}
                    </button>
                  </div>

                  {showTranslations && (
                    <div className="translations-section">
                      {availableLanguages
                        .filter((lang) => lang.code !== defaultLanguage)
                        .map((lang) => (
                          <div key={lang.code} className="mb-3">
                            <div className="d-flex align-items-center mb-2">
                              <h6 className="mb-0 me-2">{lang.name}</h6>
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder={`${t("title")} (${lang.name})`}
                                value={translations[lang.code]?.title || ""}
                                onChange={(e) =>
                                  handleTranslationChange(
                                    lang.code,
                                    "title",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control form-control-sm"
                                rows="2"
                                placeholder={`${t("description")} (${
                                  lang.name
                                })`}
                                value={
                                  translations[lang.code]?.description || ""
                                }
                                onChange={(e) =>
                                  handleTranslationChange(
                                    lang.code,
                                    "description",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("close")}
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? t("loading") : t("add")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
