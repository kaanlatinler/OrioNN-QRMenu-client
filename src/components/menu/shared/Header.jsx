"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { currentLanguage, changeLanguage, getAvailableLanguages } =
    useLanguage();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };

  const availableLanguages = getAvailableLanguages();

  return (
    <div className="position-relative border-bottom">
      <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
        <div className="container-fluid navbar-inner d-flex justify-content-between align-items-center">
          {/* Left: Home Icon */}
          <div className="d-flex align-items-center" style={{ flex: 1 }}>
            <a href="/" className="text-primary d-flex align-items-center">
              <svg
                width="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>

          {/* Center: Logo */}
          <div className="text-center" style={{ flex: 1 }}>
            <img
              src="/assets/images/logo/logofooter.png"
              alt="Cafe/Restaurant Logo"
              style={{ height: "60px", objectFit: "contain" }}
            />
          </div>

          {/* Right: Language Selector */}
          <div
            className="d-flex justify-content-end align-items-center"
            style={{ flex: 1 }}
          >
            <div className="language-selector">
              <select
                className="form-select form-select-sm"
                value={currentLanguage}
                onChange={handleLanguageChange}
                aria-label="Language select"
                style={{
                  minWidth: "120px",
                  fontSize: "0.875rem",
                  border: "1px solid #dee2e6",
                  borderRadius: "0.375rem",
                  padding: "0.375rem 0.75rem",
                  backgroundColor: "#fff",
                  color: "#495057",
                  cursor: "pointer",
                  transition:
                    "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                }}
              >
                {availableLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              {/* Language indicator icon */}
              <div className="language-indicator ms-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#6c757d" }}
                >
                  <path
                    d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .language-selector {
          display: flex;
          align-items: center;
          position: relative;
        }

        .language-selector select:focus {
          border-color: #9c2224;
          box-shadow: 0 0 0 0.2rem rgba(156, 34, 36, 0.25);
          outline: 0;
        }

        .language-selector select:hover {
          border-color: #9c2224;
        }

        .language-indicator {
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .language-selector select {
            min-width: 100px;
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
