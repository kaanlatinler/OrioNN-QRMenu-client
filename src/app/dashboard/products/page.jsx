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
import { getFriendlyErrorMessage } from "@/utils/errorMessages";

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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchProducts = async (page = currentPage, limit = itemsPerPage) => {
    try {
      setLoading(true);
      const response = await getAllProducts(
        currentLanguage,
        page,
        limit,
        searchTerm
      );
      if (response.success) {
        setProducts(response.data.products);
        setTotalPages(response.data.pagination.totalPages);
        setTotalItems(response.data.pagination.totalItems);
        setCurrentPage(response.data.pagination.currentPage);
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(getFriendlyErrorMessage(err, t));
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

  // Handle search changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentPage(1); // Reset to first page when searching
      fetchProducts(1, itemsPerPage);
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Handle pagination changes
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || totalPages === 0) {
      return; // Don't allow invalid page changes
    }
    setCurrentPage(page);
    fetchProducts(page, itemsPerPage);
  };

  const handleItemsPerPageChange = (limit) => {
    setItemsPerPage(limit);
    setCurrentPage(1); // Reset to first page
    fetchProducts(1, limit);
  };

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
      setError(getFriendlyErrorMessage(err, t));
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
      setError(getFriendlyErrorMessage(err, t));
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
      setError(getFriendlyErrorMessage(err, t));
    } finally {
      setActionLoading((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const handleUpdate = (product) => {
    console.log("Update button clicked for product:", product);
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
      setError(getFriendlyErrorMessage(err, t));
    }
  };

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
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
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
                <th>{t("price")}</th>
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
                  <td colSpan="10" className="text-center">
                    {t("loading")}
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="10" className="text-center text-danger">
                    {t("error")}: {error}
                  </td>
                </tr>
              ) : !Array.isArray(products) || products.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center text-warning">
                    {t("noDataFound")}
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>₺{(+product.price || 0).toFixed(2)}</td>

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

      {/* Pagination Controls */}
      {!loading && !error && (
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="text-muted">
            {totalItems > 0 ? (
              <>
                {t("showing")} {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} {t("of")}{" "}
                {totalItems} {t("products")}
              </>
            ) : (
              t("noDataFound")
            )}
          </div>
          {totalPages > 0 && (
            <nav aria-label="Product pagination">
              <ul className="pagination pagination-sm mb-0">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {t("previous")}
                  </button>
                </li>

                {/* Page numbers */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum =
                    Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  if (pageNum > totalPages) return null;

                  return (
                    <li
                      key={pageNum}
                      className={`page-item ${
                        pageNum === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    {t("next")}
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )}

      {/* Update Product Modal */}
      {showUpdateModal && selectedProduct && (
        <UpdateProductForm
          product={selectedProduct}
          onProductUpdated={fetchProducts}
          onClose={handleUpdateClose}
          show={showUpdateModal}
        />
      )}

      {/* Translation Modal */}
      {showTranslationModal && selectedProduct && (
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
                  {t("translations")} - {selectedProduct.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleTranslationClose}
                ></button>
              </div>
              <div className="modal-body">
                <TranslationManager
                  item={selectedProduct}
                  onSave={handleTranslationSave}
                  onCancel={handleTranslationClose}
                  itemType="product"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
