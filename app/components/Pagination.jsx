/** @format */

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
