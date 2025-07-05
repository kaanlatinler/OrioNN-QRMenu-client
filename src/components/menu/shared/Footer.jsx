"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-body">
        <ul className="left-panel list-inline mb-0 p-0">
          <li className="list-inline-item">
            <a href="/privacy-policy" className="text-white">
              {t("privacyPolicy")}
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/terms-of-use" className="text-white">
              {t("termsOfUse")}
            </a>
          </li>
        </ul>

        <div className="right-panel text-white flex items-center gap-1">
          © {currentYear} OrioNN Development. {t("allRightsReserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
