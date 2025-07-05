"use client";
import { useState } from "react";
import QRCode from "react-qr-code";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QRGenerator() {
  const { t } = useLanguage();
  const [value, setValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateQR = () => {
    if (!value.trim()) {
      alert(t("qrCodeInstructions"));
      return;
    }
    setLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setQrValue(value);
      setLoading(false);
    }, 500);
  };

  const handleDownloadQR = () => {
    if (!qrValue) return;

    const canvas = document.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = `qr-code-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const handleClear = () => {
    setValue("");
    setQrValue("");
  };

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h4 className="card-title mb-0">
              <i className="icon me-2">
                <svg
                  width="20"
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
              {t("qrCodeGenerator")}
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <label className="form-label fw-bold mb-2">
                    <i className="icon me-2">
                      <svg
                        width="16"
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
                    {t("qrCodeContent")}
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder={t("qrCodeInstructions")}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ resize: "none" }}
                  />
                  <div className="form-text">{t("qrCodeInstructions")}</div>
                </div>

                <div className="d-flex gap-2 mb-4">
                  <button
                    className="btn btn-primary"
                    onClick={handleGenerateQR}
                    disabled={loading || !value.trim()}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {t("loading")}
                      </>
                    ) : (
                      <>
                        <i className="icon me-2">
                          <svg
                            width="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        {t("generateQR")}
                      </>
                    )}
                  </button>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={handleClear}
                    disabled={!value && !qrValue}
                  >
                    <i className="icon me-2">
                      <svg
                        width="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    {t("clear")}
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-center">
                  {qrValue ? (
                    <div className="qr-result">
                      <div className="card border-0 bg-light">
                        <div className="card-body p-4">
                          <div className="qr-container mb-3">
                            <QRCode
                              value={qrValue}
                              size={200}
                              level="H"
                              fgColor="#000000"
                              bgColor="#FFFFFF"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                              }}
                            />
                          </div>

                          <div className="qr-info mb-3">
                            <small className="text-muted d-block mb-2">
                              <i className="icon me-1">
                                <svg
                                  width="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </i>
                              {t("qrCodeReady")}
                            </small>
                            <div className="text-truncate bg-white p-2 rounded border">
                              <small className="text-muted">{qrValue}</small>
                            </div>
                          </div>

                          <div className="d-flex gap-2 justify-content-center">
                            <button
                              className="btn btn-success btn-sm"
                              onClick={handleDownloadQR}
                            >
                              <i className="icon me-2">
                                <svg
                                  width="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </i>
                              {t("downloadQR")}
                            </button>

                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() =>
                                navigator.clipboard.writeText(qrValue)
                              }
                            >
                              <i className="icon me-2">
                                <svg
                                  width="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 4V2C8 1.46957 8.21071 0.960859 8.58579 0.585786C8.96086 0.210714 9.46957 0 10 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V4M16 2H12M8 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </i>
                              {t("copyContent")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="qr-placeholder">
                      <div className="card border-2 border-dashed bg-light">
                        <div className="card-body p-5 text-center">
                          <div className="mb-3">
                            <i
                              className="icon"
                              style={{ fontSize: "4rem", color: "#9c2224" }}
                            >
                              <svg
                                width="80"
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
                          </div>
                          <h5 className="text-muted mb-2">
                            {t("qrCodeWaiting")}
                          </h5>
                          <p className="text-muted mb-0">
                            {t("qrCodeInstructions")}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
