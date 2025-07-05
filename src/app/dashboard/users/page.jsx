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
import moment from "moment";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      if (response.success) {
        setUsers(response.data);
      } else {
        setError(response.message || "Failed to fetch users");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleActivate = async (userId) => {
    setActionLoading((prev) => ({ ...prev, [userId]: true }));
    try {
      const response = await activateUser(userId);
      if (response.success) {
        await fetchUsers();
      } else {
        setError(response.message || "Failed to activate user");
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
        setError(response.message || "Failed to deactivate user");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Bu kullanıcıyı silmek istediğinizden emin misiniz?")) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, [userId]: true }));
    try {
      const response = await deleteUser(userId);
      if (response.success) {
        await fetchUsers();
      } else {
        setError(response.message || "Failed to delete user");
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
        <h4 className="card-title text-white">Kullanıcılar</h4>
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
          ekle
        </button>
        <AddUserForm onUserAdded={fetchUsers} />
        <div className="form-outline">
          <input
            type="search"
            id="searchInput"
            className="form-control ms-1"
            placeholder="Search.."
            aria-label="Search"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead className="">
              <tr>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Aktif</th>
                <th>Pozisyon</th>
                <th>Created At</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="8" className="text-center text-danger">
                    Error: {error}
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-warning">
                    Kullanıcı bulunamadı.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
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
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>{user.role ? user.role.name : "N/A"}</td>
                    <td>{moment(user.createdAt).format("YYYY-MM-DD")}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleUpdate(user)}
                          disabled={actionLoading[user.id]}
                          title="Düzenle"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        {user.isActive ? (
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-warning"
                            onClick={() => handleDeactivate(user.id)}
                            disabled={actionLoading[user.id]}
                            title="Devre Dışı Bırak"
                          >
                            {actionLoading[user.id] ? (
                              <i className="bi bi-arrow-clockwise spin"></i>
                            ) : (
                              <i className="bi bi-pause"></i>
                            )}
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-success"
                            onClick={() => handleActivate(user.id)}
                            disabled={actionLoading[user.id]}
                            title="Etkinleştir"
                          >
                            {actionLoading[user.id] ? (
                              <i className="bi bi-arrow-clockwise spin"></i>
                            ) : (
                              <i className="bi bi-play"></i>
                            )}
                          </button>
                        )}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(user.id)}
                          disabled={actionLoading[user.id]}
                          title="Sil"
                        >
                          {actionLoading[user.id] ? (
                            <i className="bi bi-arrow-clockwise spin"></i>
                          ) : (
                            <i className="bi bi-trash"></i>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-between flex-wrap">
            <div
              className="dataTables_info"
              id="example_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 1 of 1 entries
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <svg
                        width="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 19L8.5 12L15.5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <svg
                        width="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 5L15.5 12L8.5 19"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {showUpdateModal && selectedUser && (
        <UpdateUserForm
          user={selectedUser}
          onUserUpdated={fetchUsers}
          onClose={handleUpdateClose}
          show={showUpdateModal}
        />
      )}
    </div>
  );
}
