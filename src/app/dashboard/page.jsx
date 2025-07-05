"use client";
import React, { useState, useEffect } from "react";
import { getAllUsers } from "@/services/userService";
import { getAllCategories } from "@/services/categoryService";
import { getAllProducts } from "@/services/productService";
import moment from "moment";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCategories: 0,
    totalProducts: 0,
    activeUsers: 0,
    activeCategories: 0,
    activeProducts: 0,
  });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentCategories, setRecentCategories] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch all data in parallel
      const [usersRes, categoriesRes, productsRes] = await Promise.all([
        getAllUsers(),
        getAllCategories(),
        getAllProducts(),
      ]);

      if (usersRes.success && categoriesRes.success && productsRes.success) {
        const users = usersRes.data || [];
        const categories = categoriesRes.data?.categories || [];
        const products = productsRes.data?.products || [];

        // Calculate statistics
        setStats({
          totalUsers: users.length,
          totalCategories: categories.length,
          totalProducts: products.length,
          activeUsers: users.filter((user) => user.isActive).length,
          activeCategories: categories.filter((cat) => cat.isActive).length,
          activeProducts: products.filter((prod) => prod.isActive).length,
        });

        // Get recent items (last 5)
        setRecentUsers(users.slice(0, 5));
        setRecentCategories(categories.slice(0, 5));
        setRecentProducts(products.slice(0, 5));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon, color, trend, subtitle }) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className={`iq-icon-box-2 ${color} me-3`}>
              <i className="icon">{icon}</i>
            </div>
            <div>
              <h4 className="mb-1">{value}</h4>
              <p className="mb-0 text-muted">{title}</p>
              {subtitle && <small className="text-muted">{subtitle}</small>}
            </div>
          </div>
          {trend && (
            <div className="mt-3">
              <span
                className={`badge ${trend > 0 ? "bg-success" : "bg-danger"}`}
              >
                {trend > 0 ? "+" : ""}
                {trend}%
              </span>
              <small className="text-muted ms-2">vs last month</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const RecentItemCard = ({ title, items, type, loading }) => (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="card-title mb-0">{title}</h4>
          <a href={`/dashboard/${type}`} className="btn btn-sm btn-primary">
            Tümünü Gör
          </a>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="text-center py-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-4">
              <i className="icon text-muted" style={{ fontSize: "2rem" }}>
                <svg
                  width="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <p className="text-muted mb-0">Henüz {type} bulunmuyor</p>
            </div>
          ) : (
            <div className="list-group list-group-flush">
              {items.map((item, index) => (
                <div key={item.id || index} className="list-group-item px-0">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      {type === "users" && (
                        <div className="iq-icon-box-2 bg-primary rounded-circle">
                          <i className="icon">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                      )}
                      {type === "categories" && (
                        <div className="iq-icon-box-2 bg-success rounded-circle">
                          <i className="icon">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                      )}
                      {type === "products" && (
                        <div className="iq-icon-box-2 bg-warning rounded-circle">
                          <i className="icon">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 7L10 17L5 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">
                        {item.title || `${item.firstName} ${item.lastName}`}
                      </h6>
                      <small className="text-muted">
                        {moment(item.createdAt).fromNow()}
                      </small>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`badge ${
                          item.isActive ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {item.isActive ? "Aktif" : "Pasif"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Dashboard yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Hata!</h4>
        <p>{error}</p>
        <hr />
        <button className="btn btn-outline-danger" onClick={fetchDashboardData}>
          Tekrar Dene
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Welcome Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card bg-gradient-primary text-white">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="mb-2">Hoş Geldiniz! 👋</h2>
                  <p className="mb-0">
                    OrioNN QR Menu yönetim paneline hoş geldiniz. Menünüzü
                    yönetmek için sol menüden istediğiniz bölümü seçebilirsiniz.
                  </p>
                </div>
                <div className="col-md-4 text-end">
                  <i
                    className="icon"
                    style={{ fontSize: "4rem", opacity: 0.3 }}
                  >
                    <svg
                      width="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-4">
        <StatCard
          title="Toplam Kullanıcı"
          value={stats.totalUsers}
          subtitle={`${stats.activeUsers} aktif`}
          icon={
            <svg
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M25 21V19C25 17.9391 24.5786 16.9217 23.8284 16.1716C23.0783 15.4214 22.0609 15 21 15H13C11.9391 15 10.9217 15.4214 10.1716 16.1716C9.42143 16.9217 9 17.9391 9 19V21M9 11C9 13.2091 7.20914 15 5 15C2.79086 15 1 13.2091 1 11C1 8.79086 2.79086 7 5 7C7.20914 7 9 8.79086 9 11ZM23 11C23 13.2091 21.2091 15 19 15C16.7909 15 15 13.2091 15 11C15 8.79086 16.7909 7 19 7C21.2091 7 23 8.79086 23 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          color="bg-primary"
        />
        <StatCard
          title="Toplam Kategori"
          value={stats.totalCategories}
          subtitle={`${stats.activeCategories} aktif`}
          icon={
            <svg
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          color="bg-success"
        />
        <StatCard
          title="Toplam Ürün"
          value={stats.totalProducts}
          subtitle={`${stats.activeProducts} aktif`}
          icon={
            <svg
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L10 17L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          color="bg-warning"
        />
        <StatCard
          title="QR Kodlar"
          value="∞"
          subtitle="Sınırsız oluşturma"
          icon={
            <svg
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 15H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 9V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          color="bg-info"
        />
      </div>

      {/* Charts Section */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Aktivite Grafiği</h4>
            </div>
            <div className="card-body">
              <div id="activity-chart" style={{ height: "300px" }}>
                <div className="text-center py-5">
                  <i className="icon text-muted" style={{ fontSize: "3rem" }}>
                    <svg
                      width="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3V21H21M7 10L12 5L17 10L21 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <p className="text-muted mt-3">
                    Grafik verisi yakında eklenecek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Hızlı İşlemler</h4>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <a href="/dashboard/users" className="btn btn-outline-primary">
                  <i className="icon me-2">
                    <svg
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H4C2.93913 15 1.92172 15.4214 1.17157 16.1716C0.42143 16.9217 0 17.9391 0 19V21M8 11C8 13.2091 6.20914 15 4 15C1.79086 15 0 13.2091 0 11C0 8.79086 1.79086 7 4 7C6.20914 7 8 8.79086 8 11ZM24 11C24 13.2091 22.2091 15 20 15C17.7909 15 16 13.2091 16 11C16 8.79086 17.7909 7 20 7C22.2091 7 24 8.79086 24 11ZM16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  Kullanıcı Yönetimi
                </a>
                <a
                  href="/dashboard/categories"
                  className="btn btn-outline-success"
                >
                  <i className="icon me-2">
                    <svg
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  Kategori Yönetimi
                </a>
                <a
                  href="/dashboard/products"
                  className="btn btn-outline-warning"
                >
                  <i className="icon me-2">
                    <svg
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7L10 17L5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  Ürün Yönetimi
                </a>
                <a href="/dashboard/qr" className="btn btn-outline-info">
                  <i className="icon me-2">
                    <svg
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 9V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  QR Kod Oluştur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Items */}
      <div className="row">
        <RecentItemCard
          title="Son Kullanıcılar"
          items={recentUsers}
          type="users"
          loading={loading}
        />
        <RecentItemCard
          title="Son Kategoriler"
          items={recentCategories}
          type="categories"
          loading={loading}
        />
        <RecentItemCard
          title="Son Ürünler"
          items={recentProducts}
          type="products"
          loading={loading}
        />
      </div>

      {/* System Info */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Sistem Bilgileri</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="text-center">
                    <h5 className="text-primary">API Durumu</h5>
                    <span className="badge bg-success">Çevrimiçi</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h5 className="text-success">Veritabanı</h5>
                    <span className="badge bg-success">Bağlı</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h5 className="text-info">Son Güncelleme</h5>
                    <small className="text-muted">
                      {moment().format("DD/MM/YYYY HH:mm")}
                    </small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h5 className="text-warning">Versiyon</h5>
                    <small className="text-muted">v1.0.0</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
