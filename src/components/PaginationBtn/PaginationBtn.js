import React from "react";
import "./Pagination.style.css";

const PaginationBtn = ({ text, handlePageClick, currentIndex }) => {
  return (
    <button
      className="pagination-btn"
      onClick={handlePageClick}
      disabled={
        currentIndex === 0 && text === "Back"
          ? true
          : currentIndex === 5461 && text === "Next"
          ? true
          : false
      }
    >
      {text}
    </button>
  );
};

export default PaginationBtn;
