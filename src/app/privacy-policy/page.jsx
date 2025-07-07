"use client";
import React from "react";
import Header from "@/components/menu/shared/Header";
import Footer from "@/components/menu/shared/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <main className="main-content">
      <Header />
      <div className="container content-inner pb-0">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title text-center mb-0">
                  {t("privacyPolicy")}
                </h1>
                <p className="text-muted text-center mb-0">
                  {t("lastUpdated")}: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="card-body">
                <div className="privacy-content">
                  <section className="mb-4">
                    <h2>{t("introduction")}</h2>
                    <p>{t("privacyIntro")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("informationWeCollect")}</h2>
                    <h3>{t("personalInformation")}</h3>
                    <p>{t("personalInfoDesc")}</p>
                    <ul>
                      {t("personalInfoList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3>{t("usageInformation")}</h3>
                    <p>{t("usageInfoDesc")}</p>
                    <ul>
                      {t("usageInfoList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("howWeUseInfo")}</h2>
                    <p>{t("useInfoDesc")}</p>
                    <ul>
                      {t("useInfoList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("informationSharing")}</h2>
                    <p>{t("sharingDesc")}</p>
                    <ul>
                      {t("sharingList").map((item, index) => (
                        <li key={index}>
                          <strong>{item.split(":")[0]}:</strong>{" "}
                          {item.split(":")[1]}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("dataSecurity")}</h2>
                    <p>{t("securityDesc")}</p>
                    <ul>
                      {t("securityList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("yourRights")}</h2>
                    <p>{t("rightsDesc")}</p>
                    <ul>
                      {t("rightsList").map((item, index) => (
                        <li key={index}>
                          <strong>{item.split(":")[0]}:</strong>{" "}
                          {item.split(":")[1]}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("cookies")}</h2>
                    <p>{t("cookiesDesc")}</p>
                    <ul>
                      {t("cookiesList").map((item, index) => (
                        <li key={index}>
                          <strong>{item.split(":")[0]}:</strong>{" "}
                          {item.split(":")[1]}
                        </li>
                      ))}
                    </ul>
                    <p>{t("cookiesControl")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("thirdPartyServices")}</h2>
                    <p>{t("thirdPartyDesc")}</p>
                    <ul>
                      {t("thirdPartyList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p>{t("thirdPartyNote")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("contactUs")}</h2>
                    <p>{t("contactDesc")}</p>
                    <ul>
                      {t("contactInfo").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
