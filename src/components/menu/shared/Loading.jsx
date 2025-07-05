"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Loading = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div id="loading" className={`modern-loader ${loading ? "show" : "hide"}`}>
      <div className="loader-container">
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loader-text">
          <span>Yükleniyor</span>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #9c2224 0%, #7d1b1d 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }

        .modern-loader.show {
          opacity: 1;
          visibility: visible;
        }

        .modern-loader.hide {
          opacity: 0;
          visibility: hidden;
        }

        .loader-container {
          text-align: center;
          color: white;
        }

        .spinner {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top: 3px solid #ffffff;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }

        .spinner-ring:nth-child(1) {
          animation-delay: 0s;
        }

        .spinner-ring:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 10px;
          left: 10px;
          border-top-color: rgba(255, 255, 255, 0.8);
          animation-delay: 0.3s;
        }

        .spinner-ring:nth-child(3) {
          width: 40px;
          height: 40px;
          top: 20px;
          left: 20px;
          border-top-color: rgba(255, 255, 255, 0.6);
          animation-delay: 0.6s;
        }

        .spinner-ring:nth-child(4) {
          width: 20px;
          height: 20px;
          top: 30px;
          left: 30px;
          border-top-color: rgba(255, 255, 255, 0.4);
          animation-delay: 0.9s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loader-text {
          font-size: 18px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .dots {
          display: flex;
          gap: 2px;
        }

        .dots span {
          animation: dotPulse 1.4s ease-in-out infinite both;
          font-size: 24px;
          line-height: 1;
        }

        .dots span:nth-child(1) {
          animation-delay: 0s;
        }

        .dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes dotPulse {
          0%,
          80%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .spinner {
            width: 60px;
            height: 60px;
          }

          .spinner-ring:nth-child(2) {
            width: 45px;
            height: 45px;
            top: 7.5px;
            left: 7.5px;
          }

          .spinner-ring:nth-child(3) {
            width: 30px;
            height: 30px;
            top: 15px;
            left: 15px;
          }

          .spinner-ring:nth-child(4) {
            width: 15px;
            height: 15px;
            top: 22.5px;
            left: 22.5px;
          }

          .loader-text {
            font-size: 16px;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .modern-loader {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
