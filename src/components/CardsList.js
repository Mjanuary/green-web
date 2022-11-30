import React from "react";

export default function CardsList({
  total_products,
  total_cash,
  total_users,
  total_scans,
}) {
  return (
    <div className="row g-6 mb-6">
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Recompenses
                </span>
                <span className="h3 font-bold mb-0">{total_cash}$</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                  <i className="bi bi-credit-card"></i>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1"></i>
                {(Math.random() * 100).toFixed(2)}%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Comparer au mois precedent
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Utilisateurs
                </span>
                <span className="h3 font-bold mb-0">{total_users}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                  <i className="bi bi-people"></i>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1"></i>
                {(Math.random() * 100).toFixed(2)}%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Comparer au mois precedent
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Bouteilles Scanner
                </span>
                <span className="h3 font-bold mb-0">{total_scans}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                  <i className="bi bi-clock-history"></i>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-danger text-danger me-2">
                <i className="bi bi-arrow-down me-1"></i>
                {(Math.random() * 100).toFixed(2)}%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Comparer au mois precedent
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                  Bouteilles produites
                </span>
                <span className="h3 font-bold mb-0">{total_products}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                  <i className="bi bi-minecart-loaded"></i>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-0 text-sm">
              <span className="badge badge-pill bg-soft-success text-success me-2">
                <i className="bi bi-arrow-up me-1"></i>
                {(Math.random() * 100).toFixed(2)}%
              </span>
              <span className="text-nowrap text-xs text-muted">
                Bouteilles produites
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
