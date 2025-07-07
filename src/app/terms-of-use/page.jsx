"use client";
import React from "react";
import Header from "@/components/menu/shared/Header";
import Footer from "@/components/menu/shared/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfUse() {
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
                  {t("termsOfUse")}
                </h1>
                <p className="text-muted text-center mb-0">
                  {t("lastUpdated")}: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="card-body">
                <div className="terms-content">
                  <section className="mb-4">
                    <h2>{t("acceptanceOfTerms")}</h2>
                    <p>{t("acceptanceDesc")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("descriptionOfService")}</h2>
                    <p>{t("serviceDesc")}</p>
                    <ul>
                      {t("serviceList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("userAccounts")}</h2>
                    <h3>{t("accountCreation")}</h3>
                    <p>{t("accountCreationDesc")}</p>
                    <ul>
                      {t("accountCreationList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3>{t("accountSecurity")}</h3>
                    <p>{t("accountSecurityDesc")}</p>
                    <ul>
                      {t("accountSecurityList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("acceptableUse")}</h2>
                    <p>{t("acceptableUseDesc")}</p>
                    <ul>
                      {t("acceptableUseList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-4">
                    <h2>{t("contentAndIP")}</h2>
                    <h3>{t("yourContent")}</h3>
                    <p>{t("yourContentDesc")}</p>
                    <ul>
                      {t("yourContentList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3>{t("ourIP")}</h3>
                    <p>{t("ourIPDesc")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("paymentTerms")}</h2>
                    <h3>{t("subscriptionPlans")}</h3>
                    <p>{t("subscriptionDesc")}</p>
                    <ul>
                      {t("subscriptionList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h3>{t("paymentProcessing")}</h3>
                    <p>{t("paymentProcessingDesc")}</p>

                    <h3>{t("refunds")}</h3>
                    <p>{t("refundsDesc")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("privacyAndData")}</h2>
                    <p>{t("privacyAndDataDesc")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("serviceAvailability")}</h2>
                    <p>{t("availabilityDesc")}</p>
                    <ul>
                      {t("availabilityList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p>{t("availabilityNote")}</p>
                  </section>

                  <section className="mb-4">
                    <h2>{t("limitationOfLiability")}</h2>
                    <p>{t("liabilityDesc")}</p>
                    <ul>
                      {t("liabilityList").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p>{t("liabilityLimit")}</p>
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
