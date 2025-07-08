"use client";
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import Header from "@/components/menu/shared/Header";
import Footer from "@/components/menu/shared/Footer";
import { getFriendlyErrorMessage } from "@/utils/errorMessages";
import Head from "next/head";

export default function DemoPage() {
  const { t, currentLanguage } = useLanguage();
  useEffect(() => {
    document.title = `OrioNN QR Menu — Demo`;
  }, [t]);

  return (
    <>
      <Head>
        <title>{`OrioNN QR Menu — Demo`}</title>
        <meta name="description" content={t("demoSeoDescription")} />
        <meta name="keywords" content="QR Menu, Demo, OrioNN, Restaurant" />
        <meta property="og:title" content={`OrioNN QR Menu — Demo`} />
        <meta property="og:description" content={t("demoSeoDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OrioNN QR Menu" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="main-content">
        <Header />

        <div className="container content-inner pb-0">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="card-title mb-0">
                      <i className="icon me-2">
                        <svg
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                      {t("welcomeMessage")} - Language Demo
                    </h1>
                    <LanguageSwitcher size="md" />
                  </div>
                  <p className="text-muted mb-0">
                    Current Language:{" "}
                    <strong>{currentLanguage.toUpperCase()}</strong>
                  </p>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Common Actions</h3>
                      <div className="d-flex flex-column gap-2 mb-4">
                        <button className="btn btn-primary">
                          <i className="icon me-2">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 5V19M5 12H19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                          {t("add")}
                        </button>
                        <button className="btn btn-success">
                          <i className="icon me-2">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                          {t("save")}
                        </button>
                        <button className="btn btn-warning">
                          <i className="icon me-2">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13M18.5 2.5L23 7L18.5 11.5M15 7H23"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                          {t("edit")}
                        </button>
                        <button className="btn btn-danger">
                          <i className="icon me-2">
                            <svg
                              width="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 6H5H21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                          {t("delete")}
                        </button>
                      </div>

                      <h3>Status Indicators</h3>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="badge bg-success">{t("active")}</span>
                        <span className="badge bg-secondary">
                          {t("inactive")}
                        </span>
                        <span className="badge bg-warning">{t("pending")}</span>
                        <span className="badge bg-info">{t("processing")}</span>
                        <span className="badge bg-primary">
                          {t("completed")}
                        </span>
                        <span className="badge bg-danger">
                          {t("cancelled")}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h3>Form Elements</h3>
                      <div className="mb-3">
                        <label className="form-label">{t("firstName")}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t("firstName")}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">{t("lastName")}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t("lastName")}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          {t("emailAddress")}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder={t("emailAddress")}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">{t("phoneNumber")}</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder={t("phoneNumber")}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">{t("password")}</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder={t("password")}
                        />
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-12">
                      <h3>Navigation & Menu Items</h3>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        <a href="#" className="btn btn-outline-primary">
                          {t("home")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("menu")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("about")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("contact")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("dashboard")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("profile")}
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          {t("settings")}
                        </a>
                      </div>

                      <h3>Product & Menu Related</h3>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="badge bg-primary">
                          {t("categories")}
                        </span>
                        <span className="badge bg-primary">
                          {t("products")}
                        </span>
                        <span className="badge bg-primary">
                          {t("allProducts")}
                        </span>
                        <span className="badge bg-primary">
                          {t("popularItems")}
                        </span>
                        <span className="badge bg-primary">
                          {t("newItems")}
                        </span>
                        <span className="badge bg-primary">
                          {t("specialOffers")}
                        </span>
                      </div>

                      <h3>Messages & Alerts</h3>
                      <div className="alert alert-success">
                        <i className="icon me-2">
                          <svg
                            width="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        {t("saveSuccess")}
                      </div>
                      <div className="alert alert-danger">
                        <i className="icon me-2">
                          <svg
                            width="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.29 3.86L1.82 18A2 2 0 0 0 3.61 21H20.4A2 2 0 0 0 22.19 18L13.72 3.86A2 2 0 0 0 10.29 3.86Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9V13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 17H12.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        {t("saveError")}
                      </div>
                      <div className="alert alert-warning">
                        <i className="icon me-2">
                          <svg
                            width="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.29 3.86L1.82 18A2 2 0 0 0 3.61 21H20.4A2 2 0 0 0 22.19 18L13.72 3.86A2 2 0 0 0 10.29 3.86Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9V13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 17H12.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        {t("confirmDelete")}
                      </div>
                    </div>
                  </div>

                  {/* Error Message Demo Section */}
                  <hr />
                  <div className="row">
                    <div className="col-12">
                      <h3>Error Message Demo (Localized)</h3>
                      <div className="alert alert-danger">
                        <strong>Network Error:</strong>{" "}
                        {getFriendlyErrorMessage(
                          { message: "Network Error" },
                          t
                        )}
                      </div>
                      <div className="alert alert-danger">
                        <strong>404 Not Found:</strong>{" "}
                        {getFriendlyErrorMessage({ message: "404" }, t)}
                      </div>
                      <div className="alert alert-danger">
                        <strong>500 Server Error:</strong>{" "}
                        {getFriendlyErrorMessage({ message: "500" }, t)}
                      </div>
                      <div className="alert alert-danger">
                        <strong>Unknown Error:</strong>{" "}
                        {getFriendlyErrorMessage(
                          { message: "Something else" },
                          t
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-muted">
                      <strong>Tip:</strong> Try changing the language using the
                      selector in the header or the one above to see all text
                      content change dynamically!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
