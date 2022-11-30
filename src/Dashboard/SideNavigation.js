import React from "react";

export default function SideNavigation({ back }) {
  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        {/* {/*  Toggler */}
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*  Brand */}
        <button className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0">
          <img src="icon.png" alt="..." />
        </button>
        {/*  User menu (mobile) */}
        <div className="navbar-user">
          {/*  Dropdown */}
          <div className="dropdown">
            {/*  Toggle */}
            <button
              id="sidebarAvatar"
              className="block"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-parent-child block">
                <img
                  alt="Placeholder"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  className="avatar avatar- rounded-circle"
                />
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </button>
            {/*  Menu */}
            <div
              className="dropdown-menu dropdown-menu-end "
              aria-labelledby="sidebarAvatar"
            >
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Settings</button>
              <button className="dropdown-item">Billing</button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item">Logout</button>
            </div>
          </div>
        </div>
        {/*  Collapse */}
        <div
          className="navbar-collapse block "
          //   id="sidebarCollapse"
        >
          {/*  Navigation */}
          <ul className="navbar-nav w-full">
            <li className="nav-item w-full">
              <button className="nav-link lg:w-full">
                <i className="bi bi-house"></i> Acceuille
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link lg:w-full">
                <i className="bi bi-bar-chart"></i> Barcodes
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link lg:w-full">
                <i className="bi bi-bookmarks"></i> Producteurs
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link lg:w-full">
                <i className="bi bi-people"></i> Utilisateurs
              </button>
            </li>
          </ul>
          {/*  Divider */}
          <hr className="navbar-divider my-5 opacity-20" />
          {/*  Navigation */}

          {/*  Push content down */}
          <div className="mt-auto"></div>
          {/*  User (md) */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link lg:w-full">
                <i className="bi bi-person-square"></i> Parametres
              </button>
            </li>
            <li className="nav-item">
              <button onClick={back} className="nav-link lg:w-full">
                <i className="bi bi-box-arrow-left"></i> Deconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
