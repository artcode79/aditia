import React from "react";
import Link from "next/link";

export default function Mahasiswa() {
  return (
    <>
      <div className="container">
        <Link href="/k/mahasiwa/add" className="btn btn-primary">
          add
        </Link>
        <div className="card border-dark shadow">
          <table id="example" class="table table-striped" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
