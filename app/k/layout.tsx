/** @format */

import React from "react";
import Atas from "../components/Atas";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Atas></Atas>
      <div className="page">
        <aside className="navbar navbar-vertical navbar-expand-sm navbar-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand navbar-brand-autodark">
              <a href="#">
                <img
                  src="https://preview.tabler.io/static/logo-white.svg"
                  width="110"
                  height="32"
                  alt="Tabler"
                  className="navbar-brand-image"
                />
              </a>
            </h1>
            <div className="collapse navbar-collapse" id="sidebar-menu">
              <ul className="navbar-nav pt-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="./dashboard">
                    <span className="nav-link-title">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/k/mahasiswa">
                    <span className="nav-link-title">Mahasiswa</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle show disabled"
                    data-bs-toggle="dropdown"
                    role="button"
                  >
                    Setting
                  </a>
                  <div className="dropdown-menu show">
                    <a className="dropdown-item" href="/k/setting/admin">
                      Admin Role
                    </a>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-link-title">Link 3</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="page-wrapper">
          <div className="page-header d-print-none">
            <div className="container-xl">
              <div className="row g-2 align-items-center">
                <div className="col">
                  <header className="mt-4 "></header>
                  <h2 className="page-title">Vertical layout</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-xl">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
