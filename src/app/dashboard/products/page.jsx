"use client";
import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  activateProduct,
  deactivateProduct,
  deleteProduct,
  updateProduct,
} from "@/services/productService";
import { getAllCategories } from "@/services/categoryService";
import AddProductForm from "@/components/dashboard/products/AddProductForm";
import UpdateProductForm from "@/components/dashboard/products/UpdateProductForm";
import TranslationManager from "@/components/dashboard/TranslationManager";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Products() {
  const { t, currentLanguage } = useLanguage();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showTranslationModal, setShowTranslationModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getAllProducts(currentLanguage);
      if (response.success) {
        setProducts(response.data.products);
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [currentLanguage, t]);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.title : `ID: ${categoryId}`;
  };

  const handleActivate = async (productId) => {
    setActionLoading((prev) => ({ ...prev, [productId]: true }));
    try {
      const response = await activateProduct(productId);
      if (response.success) {
        await fetchProducts();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const handleDeactivate = async (productId) => {
    setActionLoading((prev) => ({ ...prev, [productId]: true }));
    try {
      const response = await deactivateProduct(productId);
      if (response.success) {
        await fetchProducts();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm(t("confirmDelete"))) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, [productId]: true }));
    try {
      const response = await deleteProduct(productId);
      if (response.success) {
        await fetchProducts();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleUpdateClose = () => {
    setSelectedProduct(null);
    setShowUpdateModal(false);
  };

  const handleTranslation = (product) => {
    setSelectedProduct(product);
    setShowTranslationModal(true);
  };

  const handleTranslationClose = () => {
    setSelectedProduct(null);
    setShowTranslationModal(false);
  };

  const handleTranslationSave = async (translations) => {
    try {
      const response = await updateProduct(selectedProduct.id, {
        translations,
      });
      if (response.success) {
        await fetchProducts();
        handleTranslationClose();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Filter products based on search term
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        const categoryName = getCategoryName(product.categoryId).toLowerCase();
        return (
          product.title?.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower) ||
          categoryName.includes(searchLower) ||
          (product.translations &&
            product.translations.some(
              (trans) =>
                trans.title?.toLowerCase().includes(searchLower) ||
                trans.description?.toLowerCase().includes(searchLower)
            ))
        );
      })
    : [];

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title text-white">{t("products")}</h4>
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
          data-bs-target="#addProductModal"
          className="btn btn-outline-primary rounded"
        >
          {t("add")}
        </button>
        <AddProductForm onProductAdded={fetchProducts} />
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
                <th>{t("category")}</th>
                <th>{t("active")}</th>
                <th>{t("translations")}</th>
                <th>{t("createdAt")}</th>
                <th>{t("actions")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    {t("loading")}
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="8" className="text-center text-danger">
                    {t("error")}: {error}
                  </td>
                </tr>
              ) : !Array.isArray(products) || products.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-warning">
                    {t("noDataFound")}
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt=""
                          style={{ width: 40, height: 40, objectFit: "cover" }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>{getCategoryName(product.categoryId)}</td>
                    <td>
                      <span
                        className={`badge ${
                          product.isActive ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {product.isActive ? t("active") : t("inactive")}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        {product.translations &&
                        product.translations.length > 0 ? (
                          product.translations.map((trans) => (
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
                    <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleUpdate(product)}
                          title={t("edit")}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => handleTranslation(product)}
                          title={t("translations")}
                        >
                          <i className="fas fa-language"></i>
                        </button>
                        {product.isActive ? (
                          <button
                            className="btn btn-sm btn-outline-warning"
                            onClick={() => handleDeactivate(product.id)}
                            disabled={actionLoading[product.id]}
                            title={t("deactivate")}
                          >
                            {actionLoading[product.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-pause"></i>
                            )}
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-outline-success"
                            onClick={() => handleActivate(product.id)}
                            disabled={actionLoading[product.id]}
                            title={t("activate")}
                          >
                            {actionLoading[product.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-play"></i>
                            )}
                          </button>
                        )}
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(product.id)}
                          disabled={actionLoading[product.id]}
                          title={t("delete")}
                        >
                          {actionLoading[product.id] ? (
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

      {/* Update Product Modal */}
      {showUpdateModal && selectedProduct && (
        <UpdateProductForm
          product={selectedProduct}
          onProductUpdated={fetchProducts}
          onClose={handleUpdateClose}
        />
      )}

      {/* Translation Modal */}
      {showTranslationModal && selectedProduct && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleTranslationClose}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
              zIndex: 1051,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-header"
              style={{ padding: "1rem", borderBottom: "1px solid #dee2e6" }}
            >
              <h5 className="modal-title" style={{ margin: 0 }}>
                {t("translations")} - {selectedProduct.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleTranslationClose}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>
            <div className="modal-body" style={{ padding: "1rem" }}>
              <TranslationManager
                item={selectedProduct}
                onSave={handleTranslationSave}
                onCancel={handleTranslationClose}
                itemType="product"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
