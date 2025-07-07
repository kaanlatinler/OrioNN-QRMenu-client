// app/layout.tsx
"use client";
import Header from "@/components/dashboard/shared/Header";
import SideBar from "@/components/dashboard/shared/SideBar";
import Loading from "@/components/menu/shared/Loading";
import Script from "next/script";
import { isAuthenticated, removeToken } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isAuthenticated()) {
        router.replace("/auth/login");
      } else {
        setCheckingAuth(false);
      }
    }
  }, [router]);

  // Initialize sidebar toggle functionality
  useEffect(() => {
    if (typeof window !== "undefined" && !checkingAuth) {
      // Wait for DOM to be ready
      const initSidebarToggle = () => {
        const sidebarToggleBtn = document.querySelectorAll(
          '[data-toggle="sidebar"]'
        );
        const sidebar = document.querySelector(".sidebar-default");

        if (sidebar !== null) {
          const sidebarActiveItem = sidebar.querySelectorAll(".active");
          Array.from(sidebarActiveItem, (elem) => {
            if (!elem.closest("ul").classList.contains("iq-main-menu")) {
              const childMenu = elem.closest("ul");
              childMenu.classList.add("show");
              const parentMenu = childMenu
                .closest("li")
                .querySelector(".nav-link");
              parentMenu.classList.add("collapsed");
              parentMenu.setAttribute("aria-expanded", true);
            }
          });
        }

        Array.from(sidebarToggleBtn, (sidebarBtn) => {
          sidebarBtn.addEventListener("click", (e) => {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar.classList.contains("sidebar-mini")) {
              sidebar.classList.remove("sidebar-mini");
            } else {
              sidebar.classList.add("sidebar-mini");
            }
          });
        });
      };

      // Initialize after a short delay to ensure DOM is ready
      setTimeout(initSidebarToggle, 100);
    }
  }, [checkingAuth]);

  if (checkingAuth) {
    return null; // or <Loading />
  }

  return (
    <div>
      <div className={" "}>
        <Loading />

        <SideBar />
        <main className="main-content">
          <Header />
          <div className="container-fluid content-inner pb-0">
            <div>
              <div className="row">
                <div className="col-sm-12">{children}</div>
              </div>
            </div>
          </div>
        </main>

        {/* Scriptler */}
        <Script src="/assets/js/libs.min.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/charts/widgetcharts.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/charts/dashboard.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/fslightbox.js" strategy="afterInteractive" />
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/charts/apexcharts.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/countdown.js" strategy="beforeInteractive" />
      </div>
    </div>
  );
}
