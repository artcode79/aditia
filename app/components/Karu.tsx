/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

export default function Karu() {
  return (
    <>
      <div
        id="carousel-captions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              alt=""
              src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="carousel-caption-background d-none d-md-block"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              alt=""
              src="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="carousel-caption-background d-none d-md-block"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          data-bs-target="#carousel-captions"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          data-bs-target="#carousel-captions"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <Link href="/k/dashboard" className="btn btn-primary">
        Go Back
      </Link>
    </>
  );
}
