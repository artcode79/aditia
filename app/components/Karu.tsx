/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

export default function Karu() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-center">Custom jumbotron</h1>
          <p className="col-md-8 fs-4 text-center">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
    </>
  );
}
