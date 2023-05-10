import React from "react";

export const BranchAddress = () => {
  return (
    <>
      <div className="fw-bold">
        <ul className="ms-1 me-1 mb-2 d-flex justify-content-between list-inline list-unstyled">
          <li>
            રીઝીચનઃ-
            <span className="text-decoration-underline ps-2">
              વેસ્ટ રીજીયન
            </span>
          </li>
          <li>
            પ્રાન્તઃ-
            <span className="text-decoration-underline ps-2">
              સૌરાષ્ટ્ર કચ્છ
            </span>
          </li>
        </ul>
        <ul className="ms-1 me-1 mb-0 d-flex justify-content-between list-inline list-unstyled">
          <li>
            બ્રાન્ચઃ-
            <span className="text-decoration-underline ps-2">
              રણછોડનગર શાખા
            </span>
          </li>
          <li>
            શહેર:-
            <span className="text-decoration-underline ps-2">રાજકોટ</span>
          </li>
        </ul>
      </div>
    </>
  );
};
