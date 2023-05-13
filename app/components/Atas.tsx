/** @format */

import Link from "next/link";
import React from "react";

export default function Atas() {
  return (
    <>
      <div className="container-fluid position-fixed">
        <div className="">
          <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
