"use client";
import AddUserForm from "@/components/dashboard/user/AddUserForm";
import UpdateUserForm from "@/components/dashboard/user/UpdateUserForm";
import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  activateUser,
  deactivateUser,
  deleteUser,
} from "@/services/userService";
import { useLanguage } from "@/contexts/LanguageContext";
import moment from "moment";

export default function Users() {
  const { t } = useLanguage();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      if (response.success) {
        setUsers(response.data.users || response.data);
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
    fetchUsers();
  }, [t]);

  // Filter users based on search term
  const filteredUsers = Array.isArray(users)
    ? users.filter((user) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          user.firstName?.toLowerCase().includes(searchLower) ||
          user.lastName?.toLowerCase().includes(searchLower) ||
          user.email?.toLowerCase().includes(searchLower) ||
          user.phone?.toLowerCase().includes(searchLower) ||
          user.role?.name?.toLowerCase().includes(searchLower)
        );
      })
    : [];

  const handleActivate = async (userId) => {
    setActionLoading((prev) => ({ ...prev, [userId]: true }));
    try {
      const response = await activateUser(userId);
      if (response.success) {
        await fetchUsers();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const handleDeactivate = async (userId) => {
    setActionLoading((prev) => ({ ...prev, [userId]: true }));
    try {
      const response = await deactivateUser(userId);
      if (response.success) {
        await fetchUsers();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm(t("confirmDelete"))) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, [userId]: true }));
    try {
      const response = await deleteUser(userId);
      if (response.success) {
        await fetchUsers();
      } else {
        setError(response.message || t("error"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const handleUpdateClose = () => {
    setSelectedUser(null);
    setShowUpdateModal(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title text-white">{t("users")}</h4>
      </div>
      <div className="d-flex mt-3 ms-4 me-4 justify-content-between">
        <select
          className="form-select-custom "
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
          data-bs-target="#addUserModal"
          className="btn btn-outline-primary rounded"
        >
          {t("add")}
        </button>
        <AddUserForm onUserAdded={fetchUsers} />
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
                <th>{t("firstName")}</th>
                <th>{t("lastName")}</th>
                <th>{t("email")}</th>
                <th>{t("phone")}</th>
                <th>{t("active")}</th>
                <th>{t("role")}</th>
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
              ) : !Array.isArray(users) || users.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-warning">
                    {t("noDataFound")}
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone || "N/A"}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.isActive ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {user.isActive ? t("active") : t("inactive")}
                      </span>
                    </td>
                    <td>{user.role ? user.role.name : "N/A"}</td>
                    <td>{moment(user.createdAt).format("YYYY-MM-DD")}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleUpdate(user)}
                          title={t("edit")}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        {user.isActive ? (
                          <button
                            className="btn btn-sm btn-outline-warning"
                            onClick={() => handleDeactivate(user.id)}
                            disabled={actionLoading[user.id]}
                            title={t("deactivate")}
                          >
                            {actionLoading[user.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-pause"></i>
                            )}
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-outline-success"
                            onClick={() => handleActivate(user.id)}
                            disabled={actionLoading[user.id]}
                            title={t("activate")}
                          >
                            {actionLoading[user.id] ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <i className="fas fa-play"></i>
                            )}
                          </button>
                        )}
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(user.id)}
                          disabled={actionLoading[user.id]}
                          title={t("delete")}
                        >
                          {actionLoading[user.id] ? (
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

      {/* Update User Modal */}
      {showUpdateModal && selectedUser && (
        <UpdateUserForm
          user={selectedUser}
          onUserUpdated={fetchUsers}
          onClose={handleUpdateClose}
        />
      )}
    </div>
  );
}
