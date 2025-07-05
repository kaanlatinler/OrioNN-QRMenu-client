"use client";
import React, { useState, useEffect, useRef } from "react";
import { getAllRoles } from "../../../services/roleService";
import { register } from "../../../services/userService";

const AddUserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    roleId: "",
  });
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getAllRoles();
        if (response.success) {
          setRoles(response.data);
        } else {
          setError(response.message || "Failed to fetch roles");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await register(formData);
      if (response.success) {
        setSuccess("User registered successfully!");
        if (onUserAdded) {
          onUserAdded();
        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          roleId: "",
        });
        if (modalRef.current) {
          const { Modal } = await import("bootstrap");
          const modal = Modal.getInstance(modalRef.current);
          modal?.hide();
        }
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="addUserModal"
      ref={modalRef}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Kullanıcı Ekle
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div
                className="alert alert-success d-flex align-items-center"
                role="alert"
              >
                <svg
                  className="bi flex-shrink-0 me-2"
                  width="24"
                  height="24"
                  role="img"
                  aria-label="Success:"
                >
                  <use xlinkHref="#check-circle-fill" />
                </svg>
                <div>{success}</div>
              </div>
            )}
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-body">
                  <div className="auth-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                              Ad
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder=" "
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                              Soyad
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder=" "
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">
                              Eposta
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder=" "
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                              Telefon
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder=" "
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="password" className="form-label">
                              Şifre
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder=" "
                              value={formData.password}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="roleId" className="form-label">
                              Pozisyon
                            </label>
                            <select
                              className="form-select"
                              id="roleId"
                              value={formData.roleId}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Bir Pozisyon Seç</option>
                              {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                  {role.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          Kayıt
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
