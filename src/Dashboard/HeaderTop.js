import React from "react";

export default function HeaderTop({ navigate, active_tab }) {
  return (
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
              {/*  Title */}
              <h1 className="h2 mb-0 ls-tight">Gestion De Bouteilles</h1>
            </div>
            {/*  Actions */}
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
                <button className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                  <span className=" pe-2">
                    <i className="bi bi-pencil"></i>
                  </span>
                  <span>Ajouter Producteurs/Importateur</span>
                </button>
                <button className="btn d-inline-flex btn-sm btn-primary mx-1">
                  <span className=" pe-2">
                    <i className="bi bi-plus"></i>
                  </span>
                  <span>Generer Serie Barcode</span>
                </button>
              </div>
            </div>
          </div>
          {/*  Nav */}
          <ul className="nav nav-tabs mt-4 overflow-x border-0">
            <li className="nav-item ">
              <button
                className={`nav-link ${active_tab === "USERS" ? "active" : ""}`}
                onClick={() => navigate("USERS")}
              >
                Users
              </button>
            </li>

            <li className="nav-item ">
              <button
                className={`nav-link ${
                  active_tab === "PRODUCTS" ? "active" : ""
                }`}
                onClick={() => navigate("PRODUCTS")}
              >
                Products
              </button>
            </li>

            <li className="nav-item ">
              <button
                className={`nav-link ${active_tab === "SCANS" ? "active" : ""}`}
                onClick={() => navigate("SCANS")}
              >
                scans
              </button>
            </li>
            {/*  <li className="nav-item">
                            <button  className="nav-link font-regular">Shared</button>
                        </li>
                        <li className="nav-item">
                            <button  className="nav-link font-regular">File requests</button>
                        </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
