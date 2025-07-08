"use client";

import React, { useState } from "react";
import { login, setToken } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFriendlyErrorMessage } from "@/utils/errorMessages";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(email, password);
      setToken(res.data.token);
      router.replace("/dashboard");
    } catch (err) {
      setError(getFriendlyErrorMessage(err, t));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2 className="text-center mb-4">Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Eposta
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="menu@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password" className="form-label">
            Şifre
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
