import React, { useState, useEffect } from "react";
import HeaderTop from "../Dashboard/HeaderTop";
import SideNavigation from "../Dashboard/SideNavigation";
import CardsList from "./CardsList";
import { FC_GetPRoductsAndSells, DATE } from "../actions/logics";
export default function Dashboard({ back, user }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [scans, setScans] = useState([]);
  const [error, setError] = useState("");
  const [total_cash, setTotal_cash] = useState(0);
  const [active_tab, setNavigate] = useState("USERS");

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = () => {
    setTimeout(() => {
      FC_GetPRoductsAndSells((status, data, err) => {
        if (!status) {
          setLoading(false);
          setError(err);
        } else {
          setUsers(data.users);
          setProducts(data.products);
          setScans(data.scans);

          let cash = 0;
          for (const iterator of data.scans) {
            cash += iterator.price;
          }

          setTotal_cash(cash);
        }
      });

      LoadData();
    }, 2000);
  };
  return (
    <>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <SideNavigation back={back} />

        {/*  Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/*  Header */}
          <HeaderTop
            navigate={(val) => setNavigate(val)}
            active_tab={active_tab}
          />

          {/*  Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <CardsList
                total_cash={total_cash}
                total_products={products.length}
                total_users={users.length}
                total_scans={scans.length}
              />
              <div className="card shadow border-0 mb-7">
                <div className="card-header">
                  <h5 className="mb-0">Scans Renumerer</h5>
                </div>
                <div className="table-responsive">
                  {active_tab === "USERS" && (
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Nom Utilisateur</th>
                          <th scope="col">Date</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <img
                                  alt="..."
                                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                                <button className="text-heading font-semibold">
                                  {user.name}
                                </button>
                              </td>
                              <td>{user.registered_date}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.role}</td>
                              <td className="text-end">
                                <button className="btn btn-sm btn-neutral">
                                  Voir Plus
                                </button>
                                {/*  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i className="bi bi-trash"></i>
                                        </button> */}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}

                  {active_tab === "PRODUCTS" && (
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Code</th>
                          <th scope="col">Type</th>
                          <th scope="col">Date</th>
                          <th scope="col">Bouteille De La Companie</th>
                          <th scope="col">PU</th>
                          <th scope="col">Total</th>
                          <th scope="col"></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((prod, i) => (
                          <tr key={i}>
                            <td>
                              <img
                                alt="..."
                                src={prod.image}
                                className="avatar avatar-sm rounded-circle me-2"
                              />
                              <button className="text-heading font-semibold">
                                {prod.title}
                              </button>
                            </td>
                            <td>{prod.code}</td>
                            <td>{prod.type}</td>
                            <td>{prod.imported_date}</td>
                            <td>
                              <img
                                alt="..."
                                src="https://mlwohhkj0bxm.i.optimole.com/w:300/h:300/q:mauto/https://resilience-rse.com/wp-content/uploads/2021/01/bralima-annuaire-entreprise-alimentaire-boisson-rdc-watch-act-resilience.png"
                                className="avatar avatar-xs rounded-circle me-2"
                              />
                              <button className="text-heading font-semibold">
                                {prod.companny}
                              </button>
                            </td>
                            <td>{prod.price_unit}$</td>
                            <td>{prod.price_unit}$</td>
                            <td>{prod.total}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-neutral">
                                Voir Plus
                              </button>
                              {/*  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i className="bi bi-trash"></i>
                                        </button> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {active_tab === "SCANS" && (
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Location</th>
                          <th scope="col">Bouteille De La Companie</th>
                          <th scope="col">Date</th>
                          <th scope="col">PU</th>
                          <th scope="col">Scanned by</th>
                          <th scope="col">Collected by</th>
                          <th scope="col"></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {scans.map((scan, i) => {
                          let scanned_by = users.find(
                            (el) => el.id === scan.scanned_by
                          );

                          let scann_for = users.find(
                            (el) => el.id === scan.user_id
                          );

                          let prod = products.find(
                            (el) => el.code + "" === scan.code + ""
                          );

                          return (
                            <tr key={i}>
                              <td>
                                <img
                                  alt="..."
                                  src={prod?.image}
                                  className="avatar avatar-sm rounded-circle me-2"
                                />
                                <button className="text-heading font-semibold">
                                  {prod?.title}
                                </button>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-lg badge-dot">
                                  <i className="bg-success"></i>Goma, Nord Kivu
                                </span>
                              </td>
                              <td>
                                <img
                                  alt="..."
                                  src="https://mlwohhkj0bxm.i.optimole.com/w:300/h:300/q:mauto/https://resilience-rse.com/wp-content/uploads/2021/01/bralima-annuaire-entreprise-alimentaire-boisson-rdc-watch-act-resilience.png"
                                  className="avatar avatar-xs rounded-circle me-2"
                                />
                                <button className="text-heading font-semibold">
                                  {prod?.companny}
                                </button>
                              </td>
                              <td>{DATE(scan?.date)}</td>
                              <td>{prod?.price_unit}</td>
                              <td>{scanned_by?.name}</td>
                              <td>{scann_for?.name}</td>
                              <td className="text-end">
                                <button className="btn btn-sm btn-neutral">
                                  Voir Plus
                                </button>
                                {/*  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i className="bi bi-trash"></i>
                                        </button> */}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="card-footer border-0 py-5">
                  <span className="text-muted text-sm">
                    Showing 10 items out of 250 results found
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
