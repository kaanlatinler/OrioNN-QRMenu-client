"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

function LoginContent() {
  const searchParams = useSearchParams();
  const expired = searchParams.get("expired") === "1";

  return (
    <div className="wrapper">
      <section className="vh-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <img
                src="/assets/images/auth/01.png"
                className="bottom-img1"
                alt="images"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div className="card">
                <div className="card-body">
                  {expired && (
                    <div className="alert alert-warning text-center mb-3">
                      Oturumunuz sona erdi, lütfen tekrar giriş yapın.
                    </div>
                  )}
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-bottom">
          <a href="/">
            {/* SVG burada, kısalttım istersen tamını eklerim */}
            <svg width="100" viewBox="0 0 197 58" fill="none">
              <rect width="197" height="58" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-0.464622"
                  y1="29.4084"
                  x2="197.465"
                  y2="29.4084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9C2224" />
                  <stop offset="0.687864" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <LoginContent />
    </Suspense>
  );
}
