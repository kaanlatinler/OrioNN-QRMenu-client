import React from "react";

const Header = () => {
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

  return (
    <div className="position-relative">
      <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <a href="/dashboard" className="navbar-brand">
            {" "}
          </a>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={handleSidebarToggle}
          >
            <i className="icon">
              <svg width="20px" height="20px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </i>
          </div>
          <div className="header-logo d-xl-none">
            <a href="/dashboard" className="navbar-brand dis-none">
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
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
