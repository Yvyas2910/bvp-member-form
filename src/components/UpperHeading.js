import React from "react";

export const UpperHeading = ({ handlePrint }) => {
  return (
    <>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={handlePrint}
          className="btn btn-success me-md-2 mt-2"
          type="button"
        >
          Print
        </button>
      </div> */}

      <div className="list">
        <ul className="d-flex text-dark fw-bold justify-content-around list-inline list-unstyled mb-1">
          <li>સંપર્ક...</li>
          <li>સહયોગ...</li>
          <li>સંસ્કાર...</li>
          <li>સેવા...</li>
          <li>સમર્પણ...</li>
        </ul>
      </div>
    </>
  );
};
