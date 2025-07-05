"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = ({ size = "sm", className = "" }) => {
  const { currentLanguage, changeLanguage, getAvailableLanguages } =
    useLanguage();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };

  const availableLanguages = getAvailableLanguages();

  const sizeClasses = {
    sm: "form-select-sm",
    md: "",
    lg: "form-select-lg",
  };

  return (
    <div className={`language-switcher ${className}`}>
      <select
        className={`form-select ${sizeClasses[size]}`}
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label="Language select"
        style={{
          minWidth: size === "sm" ? "100px" : size === "lg" ? "140px" : "120px",
          fontSize:
            size === "sm" ? "0.8rem" : size === "lg" ? "1rem" : "0.875rem",
          border: "1px solid #dee2e6",
          borderRadius: "0.375rem",
          padding:
            size === "sm"
              ? "0.25rem 0.5rem"
              : size === "lg"
              ? "0.5rem 1rem"
              : "0.375rem 0.75rem",
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
          width={size === "sm" ? "14" : size === "lg" ? "18" : "16"}
          height={size === "sm" ? "14" : size === "lg" ? "18" : "16"}
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

      <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          position: relative;
        }

        .language-switcher select:focus {
          border-color: #9c2224;
          box-shadow: 0 0 0 0.2rem rgba(156, 34, 36, 0.25);
          outline: 0;
        }

        .language-switcher select:hover {
          border-color: #9c2224;
        }

        .language-indicator {
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .language-switcher select {
            min-width: ${size === "sm"
              ? "80px"
              : size === "lg"
              ? "120px"
              : "100px"};
            font-size: ${size === "sm"
              ? "0.75rem"
              : size === "lg"
              ? "0.9rem"
              : "0.8rem"};
            padding: ${size === "sm"
              ? "0.2rem 0.4rem"
              : size === "lg"
              ? "0.4rem 0.8rem"
              : "0.25rem 0.5rem"};
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
