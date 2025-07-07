"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const items = [
    {
      title: "Kullanıcılar",
      icon: (
        <i className="icon">
          <svg
            width="22"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
              stroke="currentColor"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      ), // buraya istediğin ikon adını yazarsın
      route: "/dashboard/users",
    },
    {
      title: "Kategoriler",
      icon: (
        <i className="icon">
          <svg
            width="22"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      ),
      route: "/dashboard/categories",
    },
    {
      title: "Ürünler",
      icon: (
        <i className="icon">
          <svg
            width="22"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5139 21.5H8.16604C5.09968 21.5 2.74727 20.3925 3.41547 15.9348L4.1935 9.89363C4.6054 7.66937 6.02416 6.81812 7.26901 6.81812H17.4475C18.7107 6.81812 20.047 7.73345 20.523 9.89363L21.3011 15.9348C21.8686 19.8891 19.5802 21.5 16.5139 21.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.6512 6.59848C16.6512 4.21241 14.7169 2.27812 12.3309 2.27812V2.27812C11.1819 2.27325 10.0782 2.72628 9.26406 3.53703C8.44987 4.34778 7.99218 5.44947 7.99219 6.59848H7.99219"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.2965 11.102H15.2507"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.4659 11.102H9.42013"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      ), // örnek ikon
      route: "/dashboard/products",
    },
    {
      title: "QR Kod Oluştur",
      icon: (
        <i className="icon">
          <svg
            width="22"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 12.8057H1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20.6304 8.5951V7.0821C20.6304 5.0211 18.9594 3.3501 16.8974 3.3501H15.6924"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.37012 8.5951V7.0821C3.37012 5.0211 5.04112 3.3501 7.10312 3.3501H8.33912"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20.6304 12.8047V16.8787C20.6304 18.9407 18.9594 20.6117 16.8974 20.6117H15.6924"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.37012 12.8047V16.8787C3.37012 18.9407 5.04112 20.6117 7.10312 20.6117H8.33912"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      ),
      route: "/dashboard/qr",
    },
    {
      title: "Çıkış Yap",
      icon: (
        <i className="icon">
          <svg
            width="22"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.45597C4.42197 2.77148 2.77197 4.42148 2.77197 6.45648V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21.8096 12.0215H9.76855"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.8813 9.1062L21.8093 12.0212L18.8813 14.9372"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      ),
      route: "/dashboard/logout",
    },
  ];

  const handleSidebarToggle = () => {
    const sidebar = document.querySelector(".sidebar-default");
    if (sidebar) {
      if (sidebar.classList.contains("sidebar-mini")) {
        sidebar.classList.remove("sidebar-mini");
      } else {
        sidebar.classList.add("sidebar-mini");
      }
    }
  };

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <aside className="sidebar sidebar-default sidebar-dark navs-gradient sidebar-mini sidebar-hover">
      <div className="sidebar-header d-flex align-items-center justify-content-start">
        <Link href="/dashboard" className="navbar-brand dis-none">
          <div className="logo">
            {/* SVG Logo */}
            <svg
              width="35"
              viewBox="0 0 52 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="7" y="5" width="11.4716" height="48" fill="#9C2224" />
              <rect
                x="33.5283"
                y="5"
                width="11.4716"
                height="48"
                fill="#9C2224"
              />
              <path d="M7 5H18.4716L44.9997 53H33.5281L7 5Z" fill="#9C2224" />
            </svg>
          </div>
          <div className="logo-hover">
            <svg
              width="125"
              viewBox="0 0 362 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="362" height="108" fill="url(#paint0_linear)" />
              <path
                d="M38.8 25H50.8L64.8 58.6L66.24 62.12L66.88 63.8H67.2L66.96 62.12C66.8533 61.48 66.8 60.3067 66.8 58.6V25H78V81H66L52 47.4L50.56 43.88L49.92 42.2H49.6L49.76 43.88C49.92 45.96 50 47.1333 50 47.4V81H38.8V25ZM86.0125 81L102.413 25H115.213L131.613 81H120.413L116.813 68.2H100.813L97.2125 81H86.0125ZM114.813 61L110.013 44.2C109.853 43.6133 109.693 42.92 109.533 42.12C109.373 41.2667 109.266 40.6533 109.213 40.28L108.973 38.2H108.653L108.332 40.28C108.226 40.76 108.093 41.4267 107.933 42.28C107.826 43.08 107.719 43.72 107.613 44.2L102.813 61H114.813ZM139.581 81V25H150.781V81H139.581Z"
                fill="white"
              />
              <path
                d="M164.347 25H179.547C186.96 25 192.4 26.52 195.867 29.56C199.387 32.6 201.147 37.08 201.147 43C201.147 48.4933 199.414 52.8133 195.947 55.96C194.4 57.3467 192.667 58.36 190.747 59L204.347 81H191.547L179.947 61H175.547V81H164.347V25ZM179.547 53.8C183.227 53.8 185.867 52.9733 187.467 51.32C189.12 49.6133 189.947 46.84 189.947 43C189.947 39.16 189.12 36.4133 187.467 34.76C185.867 33.0533 183.227 32.2 179.547 32.2H175.547V53.8H179.547ZM230.716 81.8C224.049 81.8 218.849 79.48 215.116 74.84C211.382 70.1467 209.516 62.8667 209.516 53C209.516 43.1333 211.382 35.88 215.116 31.24C218.849 26.5467 224.049 24.2 230.716 24.2C237.382 24.2 242.582 26.5467 246.316 31.24C250.049 35.88 251.916 43.1333 251.916 53C251.916 62.8667 250.049 70.1467 246.316 74.84C242.582 79.48 237.382 81.8 230.716 81.8ZM230.716 74.6C233.649 74.6 236.049 72.9467 237.916 69.64C239.782 66.3333 240.716 60.7867 240.716 53C240.716 45.2133 239.782 39.6667 237.916 36.36C236.049 33.0533 233.649 31.4 230.716 31.4C227.782 31.4 225.382 33.0533 223.516 36.36C221.649 39.6667 220.716 45.2133 220.716 53C220.716 60.7867 221.649 66.3333 223.516 69.64C225.382 72.9467 227.782 74.6 230.716 74.6ZM262.706 25H279.506C285.853 25 290.626 26.3067 293.826 28.92C297.08 31.5333 298.706 35.0267 298.706 39.4C298.706 43.72 297.026 47.0267 293.666 49.32C292.173 50.3333 290.52 51.0267 288.706 51.4C290.893 51.7733 292.893 52.5467 294.706 53.72C296.413 54.84 297.826 56.36 298.946 58.28C300.12 60.2 300.706 62.5733 300.706 65.4C300.706 75.8 293.64 81 279.506 81H262.706V25ZM279.506 48.2C281.906 48.2 283.826 47.48 285.266 46.04C286.76 44.5467 287.506 42.6 287.506 40.2C287.506 37.8 286.76 35.88 285.266 34.44C283.826 32.9467 281.906 32.2 279.506 32.2H273.906V48.2H279.506ZM279.506 73.8C286.173 73.8 289.506 70.7333 289.506 64.6C289.506 58.4667 286.173 55.4 279.506 55.4H273.906V73.8H279.506ZM311.534 81V25H322.734V81H311.534Z"
                fill="#9C2224"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-0.853773"
                  y1="54.7606"
                  x2="362.854"
                  y2="54.7605"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9C2224" />
                  <stop offset="0.687864" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <div
          className="sidebar-toggle d-xl-none"
          data-toggle="sidebar"
          data-active="true"
          onClick={handleSidebarToggle}
        >
          <i className="icon">
            {/* SVG Toggle Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
        </div>
      </div>

      <div className="sidebar-body p-0 data-scrollbar">
        <div className="collapse navbar-collapse" id="sidebar">
          <ul className="navbar-nav iq-main-menu">
            <li className="nav-item">
              <Link
                href="/dashboard"
                className={
                  pathname === "/dashboard" ? "nav-link active" : "nav-link"
                }
              >
                <i className="icon">
                  <svg
                    width="22"
                    viewBox="0 0 30 30"
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
                </i>
                <span className="item-name">Dashboard</span>
              </Link>
            </li>

            {items &&
              items.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={
                        pathname === item.route ? "nav-link active" : "nav-link"
                      }
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls={`sidebar-${item.route}`}
                      onClick={() => handleClick(item.route)}
                    >
                      {item.icon}
                      <span className="item-name">{item.title}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
