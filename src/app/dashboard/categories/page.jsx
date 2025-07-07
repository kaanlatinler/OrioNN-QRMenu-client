"use client";
import React, { useState, useEffect } from "react";
import {
  getAllCategories,
  activateCategory,
  deactivateCategory,
  deleteCategory,
  updateCategory,
} from "@/services/categoryService";
import AddCategoryForm from "@/components/dashboard/categories/AddCategoryForm";
import UpdateCategoryForm from "@/components/dashboard/categories/UpdateCategoryForm";
import TranslationManager from "@/components/dashboard/TranslationManager";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Categories() {
  const { t, currentLanguage } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showTranslationModal, setShowTranslationModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getAllCategories(currentLanguage);
      if (response.success) {
        setCategories(response.data.categories);
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [currentLanguage, t]);

  // Filter categories based on search term
  const filteredCategories = Array.isArray(categories)
    ? categories.filter((category) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          category.title?.toLowerCase().includes(searchLower) ||
          category.description?.toLowerCase().includes(searchLower) ||
          (category.translations &&
            category.translations.some(
              (trans) =>
                trans.title?.toLowerCase().includes(searchLower) ||
                trans.description?.toLowerCase().includes(searchLower)
            ))
        );
      })
    : [];

  const handleActivate = async (categoryId) => {
    setActionLoading((prev) => ({ ...prev, [categoryId]: true }));
    try {
      const response = await activateCategory(categoryId);
      if (response.success) {
        await fetchCategories();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [categoryId]: false }));
    }
  };

  const handleDeactivate = async (categoryId) => {
    setActionLoading((prev) => ({ ...prev, [categoryId]: true }));
    try {
      const response = await deactivateCategory(categoryId);
      if (response.success) {
        await fetchCategories();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [categoryId]: false }));
    }
  };

  const handleDelete = async (categoryId) => {
    if (!window.confirm(t("confirmDelete"))) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, [categoryId]: true }));
    try {
      const response = await deleteCategory(categoryId);
      if (response.success) {
        await fetchCategories();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [categoryId]: false }));
    }
  };

  const handleUpdate = (category) => {
    console.log("Update button clicked for category:", category);
    setSelectedCategory(category);
    setShowUpdateModal(true);
  };

  const handleUpdateClose = () => {
    setSelectedCategory(null);
    setShowUpdateModal(false);
  };

  const handleTranslation = (category) => {
    setSelectedCategory(category);
    setShowTranslationModal(true);
  };

  const handleTranslationClose = () => {
    setSelectedCategory(null);
    setShowTranslationModal(false);
  };

  const handleTranslationSave = async (translations) => {
    try {
      const response = await updateCategory(selectedCategory.id, {
        translations,
      });
      if (response.success) {
        await fetchCategories();
        handleTranslationClose();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title text-white">{t("categories")}</h4>
      </div>
      <div className="d-flex mt-3 ms-4 me-4 justify-content-between">
        <select
          className="form-select-custom"
          style={{
            padding: "10px 15px",
            color: "#fff",
            backgroundColor: "#202022",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "16px 12px",
            border: "1px solid #69697a",
            borderRadius: "0.5rem",
          }}
          id="validationDefault04"
          required
          defaultValue=""
        >
          <option value="">10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </select>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#addCategoryModal"
          className="btn btn-outline-primary rounded"
        >
          {t("add")}
        </button>
        <AddCategoryForm onCategoryAdded={fetchCategories} />
        <div className="form-outline">
          <input
            type="search"
            id="searchInput"
            className="form-control ms-1"
            placeholder={t("search")}
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead className="">
              <tr>
                <th>{t("title")}</th>
                <th>{t("description")}</th>
                <th>{t("image")}</th>
                <th>{t("active")}</th>
                <th>{t("translations")}</th>
                <th>{t("createdAt")}</th>
                <th>{t("actions")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center">
                    {t("loading")}
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7" className="text-center text-danger">
                    {t("error")}: {error}
                  </td>
                </tr>
              ) : !Array.isArray(categories) || categories.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-warning">
                    {t("noDataFound")}
                  </td>
                </tr>
              ) : (
                filteredCategories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                    <td>
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt=""
                          style={{ width: 40, height: 40, objectFit: "cover" }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          cat.isActive ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {cat.isActive ? t("active") : t("inactive")}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        {cat.translations && cat.translations.length > 0 ? (
                          cat.translations.map((trans) => (
                            <span
                              key={trans.language}
                              className="badge bg-info"
                              title={`${trans.language}: ${trans.title}`}
                            >
                              {trans.language.toUpperCase()}
                            </span>
                          ))
                        ) : (
                          <span className="badge bg-secondary">
                            {t("noTranslations")}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>{new Date(cat.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleUpdate(cat)}
                          title={t("edit")}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => handleTranslation(cat)}
                          title={t("translations")}
                        >
                          <i className="fas fa-language"></i>
                        </button>
                        {cat.isActive ? (
                          <button
                            className="btn btn-sm btn-outline-warning"
                            onClick={() => handleDeactivate(cat.id)}
                            disabled={actionLoading[cat.id]}
                            title={t("deactivate")}
                          >
                            {actionLoading[cat.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-pause"></i>
                            )}
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-outline-success"
                            onClick={() => handleActivate(cat.id)}
                            disabled={actionLoading[cat.id]}
                            title={t("activate")}
                          >
                            {actionLoading[cat.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-play"></i>
                            )}
                          </button>
                        )}
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(cat.id)}
                          disabled={actionLoading[cat.id]}
                          title={t("delete")}
                        >
                          {actionLoading[cat.id] ? (
                            <span className="spinner-border spinner-border-sm"></span>
                          ) : (
                            <i className="fas fa-trash"></i>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Category Modal */}
      {showUpdateModal && selectedCategory && (
        <UpdateCategoryForm
          category={selectedCategory}
          onCategoryUpdated={fetchCategories}
          onClose={handleUpdateClose}
          show={showUpdateModal}
        />
      )}

      {/* Translation Modal */}
      {showTranslationModal && selectedCategory && (
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
          onClick={handleTranslationClose}
        >
          <div
            className="modal-dialog modal-lg"
            style={{ margin: "1.75rem auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {t("translations")} - {selectedCategory.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleTranslationClose}
                ></button>
              </div>
              <div className="modal-body">
                <TranslationManager
                  item={selectedCategory}
                  onSave={handleTranslationSave}
                  onCancel={handleTranslationClose}
                  itemType="category"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
