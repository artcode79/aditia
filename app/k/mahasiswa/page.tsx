/** @format */

import React from "react";
import Link from "next/link";

export default function Mahasiswa() {
  return (
    <>
      <div className="container">
        <Link href="/k/mahasiswa/add" className="btn btn-primary">
          add
        </Link>
        <div className="card mt-3 shadow">
          <table id="example" className="table table-striped" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Jurusan</th>
                <th>No. Hp</th>
                <th>Program</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>poipkl;lk</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>
                  <Link
                    href="/k/mahasiswa/edit"
                    className="btn btn-outline-primary mx-1"
                  >
                    edit
                  </Link>
                  <Link
                    href="/k/mahasiswa/delete"
                    className="btn btn-outline-danger"
                  >
                    delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
