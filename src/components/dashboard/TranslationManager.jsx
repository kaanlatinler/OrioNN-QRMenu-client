"use client";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TranslationManager = ({
  item,
  onSave,
  onCancel,
  itemType = "category", // "category" or "product"
}) => {
  const { t, getAvailableLanguages } = useLanguage();
  const [translations, setTranslations] = useState(item.translations || []);
  const [loading, setLoading] = useState(false);

  const availableLanguages = getAvailableLanguages();
  const defaultLanguage = "tr";

  // Initialize translations for all languages
  const initializeTranslations = () => {
    const initialized = {};
    availableLanguages.forEach((lang) => {
      const existingTranslation = translations.find(
        (t) => t.language === lang.code
      );
      initialized[lang.code] = {
        title: existingTranslation?.title || item.title || "",
        description: existingTranslation?.description || item.description || "",
      };
    });
    return initialized;
  };

  const [formData, setFormData] = useState(initializeTranslations());

  const handleInputChange = (language, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [language]: {
        ...prev[language],
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Filter out empty translations
      const validTranslations = {};
      Object.entries(formData).forEach(([language, data]) => {
        if (data.title && data.title.trim()) {
          validTranslations[language] = {
            title: data.title.trim(),
            description: data.description?.trim() || "",
          };
        }
      });

      await onSave(validTranslations);
    } catch (error) {
      console.error("Error saving translations:", error);
    } finally {
      setLoading(false);
    }
  };

  const getLanguageName = (code) => {
    const lang = availableLanguages.find((l) => l.code === code);
    return lang ? lang.name : code;
  };

  return (
    <div className="translation-manager">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">
            <i className="icon me-2">
              <svg
                width="20"
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
            {t("translations")} - {item.title}
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {availableLanguages.map((lang) => (
              <div key={lang.code} className="col-md-6 mb-4">
                <div className="translation-section">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-0 me-2">{getLanguageName(lang.code)}</h6>
                    {lang.code === defaultLanguage && (
                      <span className="badge bg-primary">Default</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">{t("title")} *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData[lang.code]?.title || ""}
                      onChange={(e) =>
                        handleInputChange(lang.code, "title", e.target.value)
                      }
                      placeholder={`${t("title")} (${lang.name})`}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">{t("description")}</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData[lang.code]?.description || ""}
                      onChange={(e) =>
                        handleInputChange(
                          lang.code,
                          "description",
                          e.target.value
                        )
                      }
                      placeholder={`${t("description")} (${lang.name})`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex gap-2 justify-content-end mt-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              {t("cancel")}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              disabled={loading}
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
                t("save")
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .translation-manager {
          max-width: 100%;
        }

        .translation-section {
          border: 1px solid #dee2e6;
          border-radius: 0.375rem;
          padding: 1rem;
          background-color: #f8f9fa;
        }

        .translation-section h6 {
          color: #495057;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .translation-section {
            padding: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TranslationManager;
